import Button from '@frontend/components/Button/Button';
import Image from 'next/image';
import React from 'react';
import Logo from '/public/static/icons/logo.png';

const ConnectingSection: React.FC<ConnectiionSection> = ({
  onCreateRoom,
  onJoinRoom,
}) => {
  return (
    <>
      <Image src={Logo} alt="Clone button" />
      <div className="my-6" />
      <div className="flex flex-col gap-3">
        <Button onClick={onJoinRoom}>Join a meeting</Button>
        <Button buttonType="secondary" onClick={onCreateRoom} outlined={false}>
          Host a meeting
        </Button>
      </div>
    </>
  );
};

export default ConnectingSection;

export type ConnectiionSection = {
  onJoinRoom: () => void | Promise<void>;
  onCreateRoom: () => void | Promise<void>;
};
