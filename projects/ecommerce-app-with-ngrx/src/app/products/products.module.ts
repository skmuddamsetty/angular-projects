import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductNavbarComponent } from './product-navbar/product-navbar.component';
import { ProductCenterComponent } from './product-center/product-center.component';


@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent, ProductNavbarComponent, ProductCenterComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
