import { IUser } from "./IUser";

export interface IMessages {
  _id: number | string;
  author: string;
  message: string;
}

export interface IMessagesResponse {
  _id: string | number;
  author: string;
  message: string;
  createdAt: number;
  updatedAt: number | null;
}

export interface IChatInput {
  onAdd(props: IMessages): void;
}

export interface IRoom {
  _id: string | number;
  name: string;
  avatar?: Buffer;
  unreadCountMessages?: number;
  usersIds: Array<string | number>;
  messages: Array<IMessagesResponse>;
}

export interface IChatSearchParams {
  user: IUser;
  setActiveRoom: (value: IRoom) => void;
  activeRoom: IRoom | null;
  searchValue: string | null;
}
