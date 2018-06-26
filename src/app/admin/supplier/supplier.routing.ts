import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupplierSummaryComponent } from './supplier-summary/supplier-summary.component';
import { SupplierComponent } from './supplier.component';
import { AdminComponent } from '../admin.component';
import { SupplierContactComponent } from './supplier-contact/supplier-contact.component';



const routes: Routes = [
  {
    path: 'admin/proveedor',
    redirectTo: 'admin/proveedor/resumen',
    pathMatch: 'full'
  },
  {
    path: 'admin/proveedor/resumen', component: AdminComponent, children: [
      {
        path: '', outlet: 'admin', component: SupplierComponent, pathMatch: 'full', children: [
          { path: '', outlet: 'supplier', component: SupplierSummaryComponent, pathMatch: 'full' }
        ]
      },
    ]
  },
  {
    path: 'admin/proveedor/contacto', component: AdminComponent, children: [
      {
        path: '', outlet: 'admin', component: SupplierComponent, pathMatch: 'full', children: [
          { path: '', outlet: 'supplier', component: SupplierContactComponent, pathMatch: 'full' }
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
