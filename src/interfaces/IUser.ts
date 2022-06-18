export interface IUser {
  email: string;
  isActivated: boolean;
  id: string | number;
  avatar?: string;
  messages?: Array<any>;
  unreadCountMessages?: number;
}

export interface IUserSearch {
  search: string;
  limit?: number;
}
