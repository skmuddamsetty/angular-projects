import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Product } from './product';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../reducers';
import { tap, first, finalize } from 'rxjs/operators';
import { loadAllProducts } from './products.actions';

@Injectable()
export class ProductsResolver implements Resolve<any> {
  loading = false;
  constructor(private store: Store<AppState>) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.store.pipe(
      tap(() => {
        if (!this.loading) {
          this.loading = true;
          this.store.dispatch(loadAllProducts());
        }
      }),
      // first operator makes sure that observable is complete and therefore route transition can be completed
      first(),
      finalize(() => (this.loading = false))
    );
  }
}
