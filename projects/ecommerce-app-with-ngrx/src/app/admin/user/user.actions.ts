import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

export const loadAllUsers = createAction('[User Resolver] Load All Users');

export const allUsersLoaded = createAction(
  '[Load Users Effect] All Users Loaded',
  props<{ users: User[] }>()
);
