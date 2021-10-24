import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from '..';

export type Room = {
  isRoomHost: boolean;
};

const initialState: Room = {
  isRoomHost: false,
};

const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    setRoomHost(state, action: PayloadAction<boolean>) {
      state.isRoomHost = action.payload;
    },
  },
});

export const { setRoomHost } = roomSlice.actions;

export const isRoomHost = (state: AppState) => state.room.isRoomHost;

export default roomSlice.reducer;
