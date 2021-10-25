import React from 'react';
import Calls from './components/Calls';
import Chat from './components/Chat';
import Participants from './components/Participants';

const mockParticipants = [
  {
    identity: 'Mark',
  },
  {
    identity: 'Peter',
  },
  {
    identity: 'Bosh',
  },
];

const Meet: React.FC = () => {
  return (
    <main>
      <Participants participants={mockParticipants} />
      <Calls />
      <Chat />
    </main>
  );
};

export default Meet;
