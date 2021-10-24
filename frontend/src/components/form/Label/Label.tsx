import React from 'react';
import cn from 'classnames';

const Label: React.FC<LabelProps> = ({ label, hasError }) => (
  <p
    className={cn('text-gray-500 font-bold text-xl', {
      'text-red-400': hasError,
    })}
  >
    {label}
  </p>
);

export default Label;

export type LabelProps = {
  label: string;
  hasError: boolean;
};
