import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUsers from '../reducers';

export const selectUsersState = createFeatureSelector<fromUsers.UsersState>(
  fromUsers.userFeatureKey
);

export const selectAllUsers = createSelector(
  selectUsersState,
  fromUsers.selectAll
);

export const areUsersLoaded = createSelector(
  selectUsersState,
  (state) => state.allUsersLoaded
);
