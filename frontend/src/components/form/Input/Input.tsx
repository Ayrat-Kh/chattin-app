import React from 'react';
import DefaultInput, { DefaultInputProps } from './DefaultInput';
import InputContainer from './InputContainer';

const Input: React.FC<InputProps & { inputRef: React.ForwardedRef<HTMLInputElement> }> = ({
  hightlightError = true,
  showError = true,
  error,
  label,
  inputRef,
  inputProps,
}) => (
  <InputContainer {...{ hightlightError, showError, error, label }}>
    {({ hasError }) => (
      <DefaultInput
        ref={inputRef}
        {...{ hasError, type: 'text', ...inputProps }}
      />
    )}
  </InputContainer>
);

export default React.forwardRef<HTMLInputElement, InputProps>((props, ref) => (
  <Input {...props} inputRef={ref} />
));

export type InputProps<TInputProps = DefaultInputProps> = {
  type?: string;
  label?: string;
  error?: string;
  showError?: boolean;
  hightlightError?: boolean;
  inputProps?: Omit<TInputProps, 'hasError'>;
};
