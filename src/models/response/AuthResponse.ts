import { IUser } from "../../interfaces/IUser";

export interface IErrorResponse {
  status: number;
  message: string;
  errors: Array<any>;
}

export interface IAuthResponse extends IErrorResponse {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}
