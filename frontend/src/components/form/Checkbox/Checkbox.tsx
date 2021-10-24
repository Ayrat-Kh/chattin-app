import React from 'react';
import { DefaultInputProps } from '../Input/DefaultInput';

const Checkbox = ({
  inputProps,
  inputRef,
  label,
}: {
  inputProps?: CheckBoxProps['inputProps'];
  inputRef: any;
  label?: string;
}) => {
  return (
    <label className="relative min-h-[20px] block">
      <input
        ref={inputRef}
        className="peer hidden"
        {...{ ...inputProps, type: 'checkbox' }}
      />
      <div
        className={
          'absolute w-[20px] h-[20px] top-0 left-0 bg-gray-400 hover:bg-gray-300 after:hidden after:absolute after:block after:w-[6px] after:h-[12px] after:top-[2px] after:left-[6px] after:rotate-45 after:border-r-2 after:border-b-2 peer-checked:after:block peer-checked:bg-blue-400'
        }
      />
      {label && (
        <div className="absolute left-[23px] top-[2px] text-xl text-gray-500">
          {label}
        </div>
      )}
    </label>
  );
};

export default React.forwardRef<any, CheckBoxProps>(
  ({ inputProps, label }, ref) => (
    <Checkbox {...{ inputProps, inputRef: ref, label }} />
  ),
);

export type CheckBoxProps = {
  label?: string;
  inputProps?: Omit<DefaultInputProps, 'hasError' | 'type'>;
};
