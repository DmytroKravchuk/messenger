import { IUser } from "../../interfaces/IUser";

export interface IContactParams {
  contacts: Array<IUser>;
  setActiveUserId: (value: string | number) => void;
  activeUserId: string | number;
}
