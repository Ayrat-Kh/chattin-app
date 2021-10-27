import { subscribeToEvent } from '@frontend/app/services/room.service';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  ClientJoinedResponse,
  CreateRoomResponse,
  Events,
  Participant,
} from '@shared/types/room';
import { AppState } from '..';

export type Room = {
  isRoomHost: boolean;
  identity?: string;
  roomId?: string;
  participants: Participant[];
} & Partial<ClientId>;

const initialState: Room = {
  isRoomHost: false,
  roomId: undefined,
  identity: undefined,
  selfClientId: undefined,
  participants: [],
};

const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    setRoomHost(state, action: PayloadAction<boolean>) {
      state.isRoomHost = action.payload;
    },
    setSelfInfo(state, action: PayloadAction<CreateRoomResponse & ClientId>) {
      const { payload } = action;
      state.selfClientId = payload.selfClientId;
      state.identity = payload.identity;
      state.roomId = payload.roomId;
    },
    setParticipants(state, action: PayloadAction<Participant[]>) {
      state.participants = action.payload ?? [];
    },
  },
});

export const initializeWebsocket = createAsyncThunk(
  `room/initializeWebsocket`,
  (_, { dispatch }) => {
    subscribeToEvent<CreateRoomResponse>(
      Events.ROOM_CREATED,
      (response, selfClientId) => {
        console.log(
          `${Events.ROOM_CREATED}: ${JSON.stringify(response, null, 2)}`,
        );
        dispatch(
          roomSlice.actions.setSelfInfo({
            ...response,
            selfClientId,
          }),
        );
      },
    );

    subscribeToEvent<ClientJoinedResponse>(
      Events.ROOM_CREATED,
      (response, selfClientId) => {
        console.log(
          `${Events.ROOM_CREATED}: ${JSON.stringify(response, null, 2)}`,
        );
        const { participants, clientId, ...selfInfo } = response;

        dispatch(roomSlice.actions.setParticipants(participants));

        if (clientId === selfClientId) {
          dispatch(
            roomSlice.actions.setSelfInfo({ ...selfInfo, selfClientId }),
          );
        }
      },
    );
  },
);

export const { setRoomHost } = roomSlice.actions;

export const isRoomHost = (state: AppState) => state.room.isRoomHost;

export default roomSlice.reducer;

type ClientId = { selfClientId: string };
