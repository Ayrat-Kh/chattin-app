import { createRoom, joinRoom } from '@frontend/app/services/room.service';
import { ValidatorBuilder } from '@frontend/app/validator-builder/validator-builder';
import Button from '@frontend/components/Button/Button';
import Checkbox from '@frontend/components/form/Checkbox/Checkbox';
import Input from '@frontend/components/form/Input/Input';
import { isRoomHost, setRoomHost } from '@frontend/store/room/room';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

export const Home: React.FC = () => {
  const { query } = useRouter();
  const dispatch = useDispatch();
  const roomHost = useSelector(isRoomHost);

  useEffect(() => {
    dispatch(setRoomHost(query.host !== undefined));
  }, [query.host]);

  return (
    <main className="grid sm:grid-cols-3 grid-rows-3 h-full m-3 sm:m-0 sm:w-full">
      <div className="flex flex-col sm:col-start-2 sm:col-end-3 row-start-2 row-end-3 border-gray-300 border p-12 shadow-xl">
        <h1 className="text-3xl font-bold text-gray-700">
          {roomHost ? 'Host meeting' : 'Join meeting'}
        </h1>
        <div className="mt-5" />
        <InitRoomForm isRoomHost={roomHost} />
      </div>
    </main>
  );
};

export default Home;

const InitRoomForm = ({ isRoomHost }: { isRoomHost: boolean }) => {
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<MeetingFormSchema>({
    resolver: yupResolver(isRoomHost ? hostSchema : joinSchema),
  });

  const handleSubmitValid = useCallback(
    (values: MeetingFormSchema) => {
      if (isRoomHost) {
        createRoom({ identity: values.name });
      } else {
        joinRoom({ identity: values.name, roomId: values.roomId });
      }
      push('/meet');
    },
    [isRoomHost, push],
  );

  const goHome = useCallback(() => void push('/'), [push]);

  return (
    <form
      onSubmit={handleSubmit(handleSubmitValid)}
      className="flex flex-col flex-1"
    >
      <Input
        inputProps={register('name')}
        label="Enter your name"
        error={errors.name?.message}
      />
      {!isRoomHost && (
        <>
          <div className="mt-2" />
          <Input
            inputProps={register('roomId')}
            label="Enter room Id"
            error={errors.roomId?.message}
          />
        </>
      )}
      <div className="mt-2" />
      <Checkbox label="Audio only" inputProps={{ ...register('onlyAudio') }} />
      <div className="mt-2 flex-1" />
      <div className="flex justify-end">
        <Button buttonType="secondary" onClick={goHome}>
          Cancel
        </Button>
        <div className="ml-2" />
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

const hostSchema = new ValidatorBuilder().addName().build();
const joinSchema = new ValidatorBuilder().addName().addRommId().build();

type MeetingFormSchema = {
  onlyAudio: boolean;
  roomId: string;
  name: string;
};
