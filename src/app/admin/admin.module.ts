/* Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin.routing';
import { SupplierModule } from './supplier/supplier.module';
import { RegisterModule } from '../register/register.module';

/* Components */
import { AdminComponent } from './admin.component';
import { SideBarComponent } from './common/sidebar/sidebar.component';
import { HeaderAdminComponent } from './common/header/header.component';
import { AdminHomeComponent } from './home/admin-home/admin-home.component';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    SupplierModule,
    RegisterModule
  ],
  declarations: [
    AdminComponent,
    SideBarComponent,
    HeaderAdminComponent,
    AdminHomeComponent,
  ],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
