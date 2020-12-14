import { AuthActionTypes } from "./../auth/auth.actions";
import { User } from "./../model/user.model";
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';


type AuthState = {
  isLoggedIn: boolean;
  user: User;
};
const initialState: AuthState = {
  isLoggedIn: false,
  user: undefined,
};
export interface AppState {
  authState: AuthState;
}

function AuthReducer(state: AuthState = initialState, action): AuthState {
  switch (action.type) {
    case AuthActionTypes.Login:
      return {
        isLoggedIn: true,
        user: action.payload,
      };
    case AuthActionTypes.Logout:
      return {
        isLoggedIn: false,
        user: undefined,
      };
      default:
        return state
  }
}
export const reducers: ActionReducerMap<AppState> = {
  authState: AuthReducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
