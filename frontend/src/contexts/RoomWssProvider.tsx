import { connect } from '@frontend/app/services/room.service';
import { initializeWebsocket } from '@frontend/store/room/room';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const RoomWssProvider: React.FC = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const init = async () => {
      await connect();
      dispatch(initializeWebsocket());
    };
    init();
  }, [dispatch]);
  return <>{children}</>;
};

export default RoomWssProvider;
