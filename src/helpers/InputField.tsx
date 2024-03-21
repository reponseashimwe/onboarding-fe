import { forwardRef, ForwardedRef, HTMLProps } from "react";

interface InputFieldProps extends HTMLProps<HTMLInputElement> {
  parentClassName?: string;
  label?: string;
  styles?: string;
  error?: { message: string };
}

const InputField = forwardRef(
  (
    {
      parentClassName,
      label,
      styles,
      error,
      ...props
    }: InputFieldProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className={`h-[80px] ${parentClassName}`}>
        <label htmlFor={props.name} className={`${styles} sr-only"`}>
          {label}
        </label>
        <div className="w-full">
          <input
            ref={ref}
            placeholder={props.placeholder}
            className={`w-full ${props.className}`}
            onChange={props.onChange}
            {...props}
          />
          {error && (
            <p className="text-rose-400 text-xs" id={`${props.name}-error`}>
              {error?.message.split(",")[0]}
            </p>
          )}
        </div>
      </div>
    );
  }
);

export default InputField;
