import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminCenterComponent } from './admin-center/admin-center.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    AddProductComponent,
    AdminCenterComponent,
    AdminNavbarComponent,
    UserListComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class AdminModule {}
