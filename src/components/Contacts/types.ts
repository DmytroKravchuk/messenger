import { IUser } from "../../interfaces/IUser";

export interface IContactParams {
  user: IUser;
  setActiveUserId: (value: string | number) => void;
  activeUserId: string | number;
  searchValue: string | null;
}
