import { Loader2 } from 'lucide-react';
import { type ButtonHTMLAttributes, type ElementType, useMemo } from 'react';
import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';

const ButtonTv = tv({
  slots: {
    container:
      'flex h-[50px] w-full  items-center justify-center gap-2 rounded-[5px] bg-primary-100 p-4 font-raleway font-bold text-white',
    label: '',
    icon: '',
  },
  variants: {
    variant: {
      Primary: { container: 'bg-primary-100 ' },
      Secondary: {
        container: 'border border-primary-50 bg-secondary-100',
      },
    },
    disabled: {
      true: { container: 'cursor-not-allowed opacity-50 ' },
    },
  },
  defaultVariants: {
    disabled: false,
    variant: 'Primary',
  },
});

type ButtonVariants = VariantProps<typeof ButtonTv>;
// TODO : add button size , button will accept different sizes , for exp: SM, LG, XL, L ....
interface ButtonProps
  extends ButtonVariants,
    ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ElementType;
  isLoading?: boolean;
  label: string;
}

export const Button = ({
  label,
  isLoading,
  variant,
  icon: BtnIcon,
  className = '',
  disabled,
  ...rest
}: ButtonProps) => {
  
  const styles = useMemo(
    () => ButtonTv({ variant, disabled }),
    [variant, disabled],
  );

  return (
    <button {...rest} className={styles.container({ className })}>
      {isLoading ? (
        <Loader2
          height={36}
          width={30}
          className='animate-spin text-success-100'
        />
      ) : (
        BtnIcon && <BtnIcon />
      )}

      {label}
    </button>
  );
};
