export interface IUser {
  _id: string | number;
  firstName: string;
  secondName: string;
  email: string;
  isActivated: boolean;
  avatar?: string;
  unreadCountMessages?: number;
  roomsIds: Array<string | number>;
}

export interface IUserSearch {
  search: string;
  limit?: number;
}
