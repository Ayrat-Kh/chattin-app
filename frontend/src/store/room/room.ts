import { subscribeToEvent } from '@frontend/app/services/room.service';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CreateRoomResponse, Events } from '@shared/types/room';
import { AppState } from '..';

export type Room = {
  isRoomHost: boolean;
  identity?: string;
  roomId?: string;
};

const initialState: Room = {
  isRoomHost: false,
  roomId: undefined,
  identity: undefined,
};

const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    setRoomHost(state, action: PayloadAction<boolean>) {
      state.isRoomHost = action.payload;
    },
    initializeWebsocket() {
      subscribeToEvent<CreateRoomResponse>(Events.ROOM_CREATED, response => {
        console.log(
          `${Events.ROOM_CREATED}: ${JSON.stringify(response, null, 2)}`,
        );
      });
    },
  },
});

export const { setRoomHost, initializeWebsocket } = roomSlice.actions;

export const isRoomHost = (state: AppState) => state.room.isRoomHost;

export default roomSlice.reducer;
