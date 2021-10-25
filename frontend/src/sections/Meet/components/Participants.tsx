import React from 'react';

const Participants: React.FC<ParticipantsProps> = ({ participants }) => {
  return (
    <section className="flex flex-col p-2">
      <h1 className="text-4xl text-gray-600 font-bold">Participants</h1>
      {participants.map(participant => (
        <Participant key={participant.identity} {...participant} />
      ))}
    </section>
  );
};

export default Participants;

export type ParticipantsProps = {
  participants: ParticipantProp[];
};

const Participant: React.FC<ParticipantProp> = ({ identity }) => {
  return (
    <div className="py-2 border-b-2 last:border-0 hover:bg-gray-200">
      <p className="text-2xl text-gray-600">{identity}</p>
    </div>
  );
};

type ParticipantProp = {
  identity: string;
};
