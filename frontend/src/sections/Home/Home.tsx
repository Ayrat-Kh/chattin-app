import React, { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';

import ConnectingSection from './components/ConnectiionSection/ConnectiionSection';

export const Home: React.FC = ({}) => {
  const { push } = useRouter();

  const handleCreateRoom = useCallback(() => {
    push('/join-room?host=true');
  }, []);

  const handleJoinRoom = useCallback(() => {
    push('/join-room');
  }, []);

  return (
    <main className="h-full flex flex-col justify-center m-3 sm:m-0 sm:w-full">
      <div className="flex self-center flex-col items-center border-gray-300 border p-12 shadow-xl">
        <ConnectingSection
          onCreateRoom={handleCreateRoom}
          onJoinRoom={handleJoinRoom}
        />
      </div>
    </main>
  );
};

export default Home;
