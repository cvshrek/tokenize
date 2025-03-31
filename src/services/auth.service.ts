import {iam} from "@configs";
import {IAuthenticationRequest, IAuthenticationResponse} from "./dtos/auth";
import {IBaseResponse} from "./dtos/base";

class AuthService {
  static authenticate(
    params: IAuthenticationRequest
  ): Promise<IBaseResponse<IAuthenticationResponse>> {
    return iam.post("/auth/login", params);
  }
}

export default AuthService;
