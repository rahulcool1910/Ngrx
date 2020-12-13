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
export interface AppState {
  authState: AuthState;
}


function AuthReducer(state: AuthState, action): AuthState {
  switch (action.type) {
    case AuthActionTypes.Login:
      return {
        isLoggedIn: true,
        user: action.payload,
      };
  }
}
export const reducers: ActionReducerMap<AppState> = {
  authState: AuthReducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? []
  : [];
