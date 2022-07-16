export interface IUser {
  firstName: string;
  secondName: string;
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
