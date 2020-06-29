import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on,
} from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { User } from '../models/user.model';
import { UserActions } from '../user/action-types';

export const userFeatureKey = 'user';

export interface UsersState extends EntityState<User> {
  allUsersLoaded: boolean;
}

export const adapter = createEntityAdapter<User>();

export const initialUsersState = adapter.getInitialState({
  allUsersLoaded: false,
});

export const usersReducer = createReducer(
  initialUsersState,
  on(UserActions.allUsersLoaded, (state, action) =>
    adapter.addAll(action.users, { ...state, allUsersLoaded: true })
  )
);

export const { selectAll } = adapter.getSelectors();
