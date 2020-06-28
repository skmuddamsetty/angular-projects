import { createReducer, on } from '@ngrx/store';
import { Product, compareProducts } from '../product';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { ProductActions } from '../action-types';

export const productsFeatureKey = 'products';

export interface ProductsState extends EntityState<Product> {
  allProductsLoaded: boolean;
}

export const adapter = createEntityAdapter<Product>({
  sortComparer: compareProducts,
});

export const initialProductsState = adapter.getInitialState({
  allProductsLoaded: false,
});

export const coursesReducer = createReducer(
  initialProductsState,
  on(ProductActions.allProductsLoaded, (state, action) =>
    adapter.addAll(action.products, { ...state, allProductsLoaded: true })
  )
);

export const { selectAll } = adapter.getSelectors();
