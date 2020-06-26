import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductCenterComponent } from './product-center/product-center.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ProductCenterComponent,
    children: [
      {
        path: '',
        component: ProductListComponent,
        children: [
          {
            path: ':id',
            component: ProductDetailComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
