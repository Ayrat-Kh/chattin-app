import cn from 'classnames';
import React, { useMemo } from 'react';

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  outlined = true,
  buttonType = 'primary',
  fullWidth = false,
  Icon,
  rounded = false,
}) => {
  const classes = useMemo(
    () => getClasses({ rounded, outlined, buttonType, fullWidth }),
    [rounded, outlined, buttonType],
  );
  return (
    <button
      type={type}
      className={classes}
      {...(onClick
        ? {
            onClick,
          }
        : {})}
    >
      {Icon && (
        <div className="h-[20px] w-[20px]">
          <Icon />
        </div>
      )}
      {children}
    </button>
  );
};

export default Button;

export type ButtonProps = {
  buttonType?: ButtonTypes;
  fullWidth?: boolean;
  outlined?: boolean;
  rounded?: boolean;
  type?: 'submit' | 'reset' | 'button';
  Icon?: React.FC;
  onClick?: (event: React.MouseEvent) => void | Promise<void>;
};

type ButtonTypes = 'primary' | 'secondary' | 'thertiary' | 'semi-crystal';

const getClasses = ({
  rounded,
  outlined,
  buttonType,
  fullWidth = false,
}: {
  rounded: boolean;
  buttonType: ButtonTypes;
  outlined: boolean;
  fullWidth?: boolean;
}) => {
  const classes = [
    'select-none p-6 h-20 transition-opacity duration-100 font-semibold text-xl hover:opacity-80 active:opacity-90 border-2',
    rounded ? 'rounded-full' : 'rounded-md',
    {
      ['w-full']: fullWidth,
    },
  ];
  if (outlined) {
    switch (buttonType) {
      case 'primary':
        classes.push('bg-blue text-white border-blue');
        break;
      case 'secondary':
        classes.push('bg-gray text-white border-gray');
        break;
      case 'thertiary':
        classes.push('bg-red text-white border-red');
        break;
      case 'semi-crystal':
        classes.push(
          'bg-gray-light text-white border-gray-light bg-opacity-40 border-opacity-5',
        );
        break;
    }
  } else {
    switch (buttonType) {
      case 'primary':
        classes.push('bg-white text-blue border-blue');
        break;
      case 'secondary':
        classes.push('bg-white text-gray border-gray-light');
        break;
      case 'thertiary':
        classes.push('bg-white text-red border-red');
        break;
      case 'semi-crystal':
        classes.push('bg-white text-gray border-gray-light');
        break;
    }
  }
  return cn(classes);
};
