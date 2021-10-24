import React from 'react';
import cn from 'classnames';

const DefaultInput: React.FC<
  { forwardedRef: React.ForwardedRef<any> } & DefaultInputProps
> = ({ forwardedRef, hasError, ...inputProps }) => {
  const pickedProps = Object.fromEntries(
    Object.entries(inputProps).filter(([, value]) => Boolean(value)),
  );

  return (
    <input
      ref={forwardedRef}
      className={cn('border focus:outline-none px-2 py-1 w-full text-xl mt-1', {
        'border-red-400': hasError,
        'border-gray-300 focus:border-gray-400': !hasError,
      })}
      {...pickedProps}
    />
  );
};

export default React.forwardRef<any, DefaultInputProps>((props, ref) => (
  <DefaultInput forwardedRef={ref} {...props} />
));

export type DefaultInputProps = Partial<
  Pick<
    HTMLInputElement,
    'onblur' | 'onchange' | 'onfocus' | 'oninput' | 'value' | 'defaultValue'
  >
> & {
  hasError: boolean;
  type?: string;
  name?: string;
};
