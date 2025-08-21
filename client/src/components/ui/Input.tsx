import {
  type InputHTMLAttributes,
  useCallback,
  useMemo,
  useState,
  useEffect,
} from 'react';
import { tv } from 'tailwind-variants';

import { Control, FieldValues, Path, useController } from 'react-hook-form';

type InputSize = 'SM' | 'MD' | 'LG' | 'Xl'; 
interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  placeholder?: string;
  value?: string;
  size?: InputSize; // Optional size prop
  error?: string;
}

interface ControlledInputProps<T extends FieldValues> extends InputProps {
  control: Control<T, any>; // The control object from react-hook-form
  name: Path<T>; // The name of the field in the form
}

const inputTv = tv({
  slots: {
    container: 'flex w-full  flex-col gap-2',
    label: 'font-raleway text-sm font-medium text-white',
    input:
      'h-[55px] w-full rounded-[6px] border  border-primary-50  pr-2 bg-input-background pl-6 font-rubik text-sm font-normal text-primary-150 placeholder-primary-50 outline-none',
    error: 'text-error-200 text-sm font-light',
  },
  variants: {
    focused: {
      true: {
        input: 'border-2 border-dashed',
      },
    },
    error: {
      true: {
        input: 'border-error-100 text-error-100',
      },
    },
    isPassword: {
      true: {
        input: '',
      },
    },
    disabled: {
      true: {
        input: 'cursor-not-allowed opacity-50',
      },
    },
  },
  defaultVariants: {
    focused: false,
    error: false,
    disabled: false,
    isPassword: false,
  },
});

// todo: to add the input variant size , for example Xl, L ,SM

export const Input = ({
  label,
  placeholder,

  value,
  error,
  size = 'MD', // stil not functional
  ...rest 
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const { type, disabled } = rest;

  // const [isPasswordShown, setIsPasswordShown] = useState<undefined | boolean>(
  //   type === 'password' ? false : undefined,
  // );

  const handleOnFocus = useCallback(() => setIsFocused(true), []);

  const handleOnBlur = useCallback(() => setIsFocused(false), []);

  const styles = useMemo(
    () =>
      inputTv({
        focused: isFocused,
        disabled: disabled,
        isPassword: Boolean(type === 'password'),
        error: Boolean(error),
      }),
    [isFocused, disabled, error, type],
  );

  // const handleOnPasswordToggle = useCallback(() => {
  //   if (type !== 'password') return;
  //   setIsPasswordShown((prev) => !prev);
  // }, [type]);

  console.log('ControlledInput field', value);
  return (
    <div className={styles.container()}>
      {label && <label className={styles.label()}>{label}</label>}
      <div className='relative flex w-full flex-row justify-end'>
        <input
          onBlur={handleOnBlur}
          onFocus={handleOnFocus}
          className={styles.input()}
          type='text'
          placeholder={placeholder}
          value={value}
          {...rest}
        />
      </div>
      {error && <span className={styles.error()}>{error}</span>}
    </div>
  );
};

export const ControlledInput = <T extends FieldValues>({
  control,
  name,
  ...rest
}: ControlledInputProps<T>) => {

  // USing useController api to connet with react-hook-form
  
  const { field, fieldState } = useController({
    control,
    name,
  });
  useEffect(() => console.log(field.value), [field.value]);

  return (
    <Input
      // ref={field.ref} //
      label='Controlled Input'
      placeholder='Type something...'
      value={field.value ?? ''}
      error={fieldState.error?.message}
      onChange={field.onChange}
      {...rest}
    />
  );
};
