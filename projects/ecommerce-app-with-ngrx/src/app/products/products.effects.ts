import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductActions } from './action-types';
import { ProductsService } from './services/products.service';
import { concatMap, map } from 'rxjs/operators';
import { allProductsLoaded } from './products.actions';

@Injectable()
export class ProductEffects {
  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadAllProducts),
      concatMap((action) => this.productsService.getAllCourses()),
      map((products) => allProductsLoaded({ products }))
    )
  );
  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}
}
