import { IMessagesResponse, IRoom } from "./IChat";

export interface IUser {
  _id: string | number;
  firstName: string;
  secondName: string;
  email: string;
  isActivated: boolean;
  avatar?: string;
  messages?: Array<IMessagesResponse>;
  unreadCountMessages?: number;
  rooms: Array<IRoom>;
}

export interface IUserSearch {
  search: string;
  limit?: number;
}
