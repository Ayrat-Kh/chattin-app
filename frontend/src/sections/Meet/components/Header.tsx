import React from 'react';

const Header: React.FC<HeaderProps> = ({ roomId }) => {
  return (
    <header className="flex items-center px-4 h-20 bg-blue text-white text-2xl rounded-b-lg">
      <h1>
        <b>Room Id:</b> {roomId ?? ''}
      </h1>
    </header>
  );
};

export default Header;

export type HeaderProps = {
  roomId?: string;
};
