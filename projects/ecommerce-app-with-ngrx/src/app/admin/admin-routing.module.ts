import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminCenterComponent } from './admin-center/admin-center.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    component: AdminCenterComponent,
    children: [
      {
        path: 'add-product',
        component: AddProductComponent,
      },
      {
        path: 'users-list',
        component: UserListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
