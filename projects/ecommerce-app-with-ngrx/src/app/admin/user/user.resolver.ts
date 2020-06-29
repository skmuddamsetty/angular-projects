import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../reducers';
import { areUsersLoaded } from './user.selectors';
import { tap, filter, first, finalize } from 'rxjs/operators';
import { loadAllUsers } from './user.actions';
import { Injectable } from '@angular/core';

@Injectable()
export class UserResolver implements Resolve<any> {
  loading = false;
  constructor(private store: Store<AppState>) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.store.pipe(
      select(areUsersLoaded),
      tap((areUsersLoaded) => {
        if (!this.loading && !areUsersLoaded) {
          this.loading = true;
          this.store.dispatch(loadAllUsers());
        }
      }),
      filter((areUsersLoaded) => areUsersLoaded),
      first(),
      finalize(() => (this.loading = false))
    );
  }
}
