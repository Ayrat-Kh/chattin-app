import { getParticipants, getRoomId } from '@frontend/store/room/room';
import React from 'react';
import { useSelector } from 'react-redux';
import ActionButtons from './components/ActionButtons';
import Calls from './components/Calls';
import Chat from './components/Chat';
import Header from './components/Header';
import Participants from './components/Participants';

const Meet: React.FC = () => {
  const participants = useSelector(getParticipants);
  const roomId = useSelector(getRoomId);

  return (
    <>
      <div className="flex flex-col h-full">
        <Header roomId={roomId} />
        <main className="flex flex-col flex-1 md:flex-row">
          <div className="flex flex-col flex-1 md:flex-[3] md:order-1">
            <Calls />
          </div>
          <div className="flex-1">
            <Participants participants={participants} />
          </div>
          <div className="flex-1 md:order-2">
            <Chat />
          </div>
        </main>
        <div className="flex justify-center">
          <div className="md:max-w-[60%] w-full">
            <ActionButtons />
          </div>
        </div>
      </div>
    </>
  );
};

export default Meet;
