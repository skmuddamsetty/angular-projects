import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from '../reducers';
import { tap, first, finalize, filter } from 'rxjs/operators';
import { loadAllProducts } from './products.actions';
import { areProductsLoaded } from './products.selectors';

@Injectable()
export class ProductsResolver implements Resolve<any> {
  loading = false;
  constructor(private store: Store<AppState>) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.store.pipe(
      select(areProductsLoaded),
      tap((allProductsLoaded) => {
        if (!this.loading && !allProductsLoaded) {
          this.loading = true;
          this.store.dispatch(loadAllProducts());
        }
      }),
      filter((productsLoaded) => productsLoaded),
      // first operator makes sure that observable is complete and therefore route transition can be completed
      first(),
      finalize(() => (this.loading = false))
    );
  }
}
