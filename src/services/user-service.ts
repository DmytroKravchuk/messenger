import { AxiosResponse } from "axios";

import $api from "../http";
import { IUser, IUserSearch } from "../interfaces/IUser";

export default class UserService {
  static fetchUsers(params: IUserSearch): Promise<AxiosResponse<IUser[]>> {
    return $api.post<IUser[]>("/users", params);
  }
}
