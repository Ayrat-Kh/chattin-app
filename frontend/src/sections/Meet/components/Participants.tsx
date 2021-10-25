import React from 'react';

const Participants: React.FC<ParticipantsProps> = ({ participants }) => {
  return (
    <section>
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
    <>
      <p>{identity}</p>
    </>
  );
};

type ParticipantProp = {
  identity: string;
};
