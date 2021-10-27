import React from 'react';

const Header: React.FC<HeaderProps> = ({ roomId }) => {
  return (
    <div className="flex justify-center">
      <div className="md:max-w-[60%] w-full">
        <header className="flex items-center px-4 h-20 bg-blue text-white text-2xl rounded-b-lg">
          <h1>
            <b>Room Id:</b> {roomId ?? ''}
          </h1>
        </header>
      </div>
    </div>
  );
};

export default Header;

export type HeaderProps = {
  roomId?: string;
};
