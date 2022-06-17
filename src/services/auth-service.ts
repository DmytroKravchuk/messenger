import { AxiosResponse } from "axios";

import $api from "../http";
import { ILoginParams, IRegistrationParams } from "../interfaces/IAuth";
import { IAuthResponse } from "../models/response/AuthResponse";

export class AuthService {
  static async login(
    params: ILoginParams,
  ): Promise<AxiosResponse<IAuthResponse>> {
    return $api.post<IAuthResponse>("/login", params);
  }

  static async registration(
    params: IRegistrationParams,
  ): Promise<AxiosResponse<IAuthResponse>> {
    return $api.post<IAuthResponse>("/registration", params);
  }

  static async logout(): Promise<void> {
    return $api.post("/logout");
  }
}
