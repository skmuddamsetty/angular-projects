import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { AdminCenterComponent } from './admin-center/admin-center.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [AddProductComponent, AdminCenterComponent],
  imports: [CommonModule, AdminRoutingModule, MatToolbarModule],
})
export class AdminModule {}
