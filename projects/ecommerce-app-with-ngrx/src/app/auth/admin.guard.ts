import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../reducers';
import { tap } from 'rxjs/operators';
import { isUserAdmin } from './auth.selectors';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) {}
  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(isUserAdmin),
      tap((isAdmin) => {
        if (!isAdmin) {
          this.router.navigateByUrl('/product-center');
        }
      })
    );
  }
}
