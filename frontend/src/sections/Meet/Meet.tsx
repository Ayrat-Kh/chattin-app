import React from 'react';
import ActionButtons from './components/ActionButtons';
import Calls from './components/Calls';
import Chat from './components/Chat';
import Participants from './components/Participants';

const mockParticipants = [
  {
    identity: 'Mark',
  },
  {
    identity: 'W w Peter',
  },
  {
    identity: 'Bosh',
  },
];

const Meet: React.FC = () => {
  return (
    <main className="flex flex-col sm:flex-row h-full">
      <div className="flex-1">
        <Participants participants={mockParticipants} />
      </div>
      <div className="flex flex-col  flex-1 sm:flex-[2]">
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
