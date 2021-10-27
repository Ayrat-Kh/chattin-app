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
    <main className="flex flex-col sm:flex-row h-full">
      <div className="flex-1">
        <Participants participants={participants} />
      </div>
      <div className="flex flex-col  flex-1 sm:flex-[2]">
        <Header roomId={roomId} />
        <Calls />
        <ActionButtons />
      </div>
      <div className="flex-1">
        <Chat />
      </div>
    </main>
  );
};

export default Meet;
