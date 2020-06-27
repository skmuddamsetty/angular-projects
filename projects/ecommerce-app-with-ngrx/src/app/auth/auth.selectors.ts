import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AuthState } from './reducers';
import * as fromAuth from './reducers';

export const selectAuthState = createFeatureSelector<AuthState>(
  fromAuth.authFeatureKey
);

export const isLoggedIn = createSelector(
  selectAuthState,
  (auth) => !!auth.user
);

export const isLoggedOut = createSelector(
  isLoggedIn,
  (isLoggedIn) => !isLoggedIn
);

export const isUserAdmin = createSelector(
  selectAuthState,
  (auth) => auth.user && auth.user.isAdmin
);
