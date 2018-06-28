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
import { SupplierComponent } from './supplier/supplier.component';
import { MenuSuppliersComponent } from './supplier/menu-suppliers/menu-suppliers.component';


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
    SupplierComponent,
    MenuSuppliersComponent
  ],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
