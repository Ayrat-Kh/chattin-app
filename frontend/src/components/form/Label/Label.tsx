import cn from 'classnames';
import React from 'react';

const Label: React.FC<LabelProps> = ({ label, hasError }) => (
  <p
    className={cn('text-gray font-bold text-xl', {
      'text-red': hasError,
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
