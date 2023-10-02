import { ISignIn } from "./sign-in.interface";

export interface IAuthState {
  isLoggedIn: boolean;
  token?: string;
  userInfo?: ISignIn;
}
