import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { UserActions } from './action-types';
import { concatMap, map } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { allUsersLoaded } from './user.actions';

@Injectable()
export class UserEffects {
  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActions.loadAllUsers),
      concatMap((action) => this.userService.getAllUsers()),
      map((users) => allUsersLoaded({ users }))
    )
  );
  constructor(private actions$: Actions, private userService: UserService) {}
}
