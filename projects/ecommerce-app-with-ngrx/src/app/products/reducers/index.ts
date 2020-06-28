import { createReducer, on } from '@ngrx/store';
import { Product } from '../product';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { ProductActions } from '../action-types';

export const productsFeatureKey = 'products';

export interface ProductsState extends EntityState<Product> {}

export const adapter = createEntityAdapter<Product>();

export const initialProductsState = adapter.getInitialState();

export const coursesReducer = createReducer(
  initialProductsState,
  on(ProductActions.allProductsLoaded, (state, action) =>
    adapter.addAll(action.products, state)
  )
);

export const { selectAll } = adapter.getSelectors();
