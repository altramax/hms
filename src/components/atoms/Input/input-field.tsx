import React from 'react';
import { Control, useController, UseControllerProps } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

interface InputFieldProp
  extends UseControllerProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name' | 'defaultValue'> {
  readonly type?: string;
  readonly className?: string;
  readonly asterisk?: boolean;
  readonly icon?: string;
  readonly iconPosition?: 'left' | 'right';
  readonly label?: string;
  readonly disabled?: boolean;
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  readonly control?: Control<any>;
}

const Input = (props: InputFieldProp) => {
  const {
    name,
    type,
    placeholder,
    className,
    icon,
    iconPosition,
    asterisk,
    label,
    disabled,
    control,
    ...others
  } = props;

  const {
    field,
    formState: { errors },
  } = useController({ name, control, defaultValue: '' });

  return (
    <>
      {label && (
        <label
          htmlFor={name}
          className="text-gray-500 flex items-center justify-start gap-1 font-medium text-xs"
        >
          {label}
          {asterisk && <span className="text-[#DB1813]">*</span>}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div
            className={`
                            pointer-events-none absolute inset-y-0 flex items-center px-2.5
                            ${
                              (iconPosition === 'left' && 'left-0') ||
                              (iconPosition === 'right' && 'right-0')
                            }`}
          >
            <span>{icon}</span>
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          className={`border-blue-300 text-black ${className}`}
          disabled={disabled}
          {...others}
          {...field}
        />
      </div>
      <ErrorMessage
        name={name}
        errors={errors}
        render={({ message }) => <p className="mt-1 text-xs text-red-500">{message}</p>}
      />
    </>
  );
};

export default Input;
