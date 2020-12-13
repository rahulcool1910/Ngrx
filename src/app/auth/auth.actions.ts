import { User } from "./../model/user.model";
import { Action } from "@ngrx/store";

export enum AuthActionTypes {
  Login = "[Login] Load Auths",
  Loginout = "[Logout] Load Auths",
}

export class LoginAction implements Action {
  readonly type = AuthActionTypes.Login;

  constructor(public payload: User) {
    console.log(payload);
  }
}

export type AuthActions = LoginAction;
