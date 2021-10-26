import React from 'react';

const Chat: React.FC<ChatProps> = () => {
  return (
    <section className="flex flex-col p-2">
      <h1 className="text-4xl text-gray-600 font-bold">Chat</h1>
    </section>
  );
};

export default Chat;

export type ChatProps = {};
