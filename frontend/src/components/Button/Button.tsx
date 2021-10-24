import cn from 'classnames';

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  outlined = true,
  buttonType = 'primary',
  fullWidth = false,
}) => {
  return (
    <button
      type={type}
      className={cn([
        {
          ['bg-blue-500 text-white']: buttonType === 'primary' && outlined,
          ['bg-white text-blue-500 border-gray-300']:
            buttonType === 'secondary' && outlined,
          ['text-blue-500 text-white']: buttonType === 'primary' && !outlined,
          ['bg-white text-blue-500']: buttonType === 'secondary' && !outlined,
          ['w-full']: fullWidth,
        },
        'px-6 py-2 rounded-md hover:opacity-80 transition-opacity duration-100 font-semibold text-xl h-12',
      ])}
      {...(onClick
        ? {
            onClick,
          }
        : {})}
    >
      {children}
    </button>
  );
};

export default Button;

export type ButtonProps = {
  onClick?: (event: React.MouseEvent) => void | Promise<void>;
  buttonType?: 'primary' | 'secondary';
  type?: 'submit' | 'reset' | 'button';
  outlined?: boolean;
  fullWidth?: boolean;
};
