export enum Events {
  ROOM_CREATE = 'room.create',
  ROOM_CREATED = 'room.created',
  CLIENT_JOIN = 'client.join',
  CLIENT_JOINED = 'client.joined',
  CLIENT_LEAVE = 'client.leave',
  CLIENT_LEFT = 'client.left',
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

export type ClientJoinedResponse = {
  participants: Participant[];
  clientId: string;
  identity: string;
  roomId: string;
};

export type Participant = {
  clientId: string;
  identity: string;
};

export type Room = {
  id: string;
  participants: Participant[];
};
