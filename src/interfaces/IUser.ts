export interface IUser {
  email: string;
  isActivated: boolean;
  id: string;
  avatar?: any;
  messages?: Array<any>;
  unreadCountMessages?: number;
}
