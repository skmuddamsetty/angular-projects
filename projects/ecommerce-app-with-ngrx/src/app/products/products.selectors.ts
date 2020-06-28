import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProducts from './reducers';

export const selectProductsState = createFeatureSelector<
  fromProducts.ProductsState
>(fromProducts.productsFeatureKey);

export const selectAllProducts = createSelector(
  selectProductsState,
  fromProducts.selectAll
);
