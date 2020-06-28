import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../reducers';
import { selectAllProducts } from '../products.selectors';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.products$ = this.store.pipe(select(selectAllProducts));
  }
}
