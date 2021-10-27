import React from 'react';

const Participants: React.FC<ParticipantsProps> = ({ participants }) => {
  return (
    <section className="flex flex-col p-2">
      <h1 className="text-4xl text-gray font-bold">Participants</h1>
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
    <div className="py-2 border-b-2 last:border-0 hover:bg-gray-light">
      <p className="text-2xl text-gray">{identity}</p>
    </div>
  );
};

type ParticipantProp = {
  identity: string;
};
