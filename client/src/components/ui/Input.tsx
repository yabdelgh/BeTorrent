import {
  type InputHTMLAttributes,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { tv } from 'tailwind-variants';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder?: string;
  value?: string;
  error?: string;
}

const inputTv = tv({
  slots: {
    container: 'flex w-full  flex-col gap-2',
    label: 'font-raleway text-sm font-medium text-white',
    input:
      'h-[55px] rounded border  border-primary-50  bg-input-background pl-6 font-rubik text-sm font-light text-primary-50 placeholder-primary-50 outline-none',
    error: 'text-error-100 text-sm font-light',
  },
  variants: {
    focused: {
      true: {
        input: 'border-2 border-dashed ',
      },
    },
    error: {
      true: {
        input: 'border-error-100 text-error-100 placeholder-error-100',
        label: 'text-error-100',
      },
    },
    disabled: {
      true: {},
    },
  },
  defaultVariants: {
    focused: false,
    error: false,
    disabled: false,
  },
});

// todo: to add the input variant size , for example Xl, L ,SM

export const Input = ({
  label,
  placeholder,
  value,
  error,
  ...rest
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleOnFocus = useCallback(() => setIsFocused(true), []);
  const handleOnBlur = useCallback(() => setIsFocused(false), []);

  const styles = useMemo(
    () =>
      inputTv({
        focused: isFocused,
        disabled: rest.disabled,
        error: Boolean(error), // ✅ only true if error exists
      }),
    [isFocused, rest.disabled, error],
  );

  return (
    <div className={styles.container()}>
      {label && <label className={styles.label()}>{label}</label>}
      <input
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
        className={styles.input()}
        type='text'
        placeholder={placeholder}
        value={value}
        {...rest}
      />
      {error && <span className={styles.error()}>{error}</span>}
    </div>
  );
};
