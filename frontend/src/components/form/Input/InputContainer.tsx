import React from 'react';
import Error from '../Error/Error';
import Label from '../Label/Label';

const InputContainer = ({
  hightlightError = true,
  showError = true,
  error,
  label,
  children,
}: InputContainerProps & { children?: React.FC<{ hasError: boolean }> }) => {
  return (
    <label>
      {label && <Label label={label} hasError={!!error && hightlightError} />}
      {children?.({ hasError: !!error && hightlightError })}
      {error && showError && <Error error={error} />}
    </label>
  );
};

export default InputContainer;

export type InputContainerProps = {
  label?: string;
  error?: string;
  showError?: boolean;
  hightlightError?: boolean;
};
