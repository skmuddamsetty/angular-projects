import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { AuthActions } from './action-types';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthEffects {
  // side effect is something that is done in response to an action
  // so the action gets dispatched, its reducer gets triggered and then after that we want to initiate this side effect

  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(AuthActions.login),
        tap((action) => {
          localStorage.setItem('user', JSON.stringify(action.user));
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions) {
    // example of how we can cause a side effect, but the below method is not safe because we do not have type safety when accessing the user property from action, and we are repeating the action type name that is '[Login Page] User Login'
    // these problems can be overcome by doing the steps given for login$
    // actions$.subscribe((action) => {
    //   if (action.type === '[Login Page] User Login') {
    //     localStorage.setItem('user', JSON.stringify(action['user']));
    //   }
    // });
  }
}
