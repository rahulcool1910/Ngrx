import { User } from "./../model/user.model";
import { Action } from "@ngrx/store";

export enum AuthActionTypes {
  Login = "[Login] Load Auths",
  Logout = "[Logout] Load Auths",
}

export class LoginAction implements Action {
  readonly type = AuthActionTypes.Login;

  constructor(public payload: User) {}
}
export class LogoutAction implements Action {
  readonly type = AuthActionTypes.Logout;
}

export type AuthActions = LogoutAction;
