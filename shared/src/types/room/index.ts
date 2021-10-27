export enum Events {
  ROOM_CREATE = 'room.create',
  ROOM_CREATED = 'room.created',
  ROOM_JOIN = 'room.join',
  ROOM_JOINED = 'room.joined',
}

export type CreateRoom = {
  identity: string;
};

export type CreateRoomResponse = {
  identity: string;
  roomId: string;
};

export type JoinRoom = {
  identity: string;
  roomId: string;
};

export type JoinRoomResponse = {
  identity: string;
  roomId: string;
};
