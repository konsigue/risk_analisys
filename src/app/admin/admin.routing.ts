import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './home/admin-home/admin-home.component';
import { SupplierListComponent } from './supplier/supplier-list/supplier-list.component';
import { SupplierSummaryComponent } from './supplier/supplier-summary/supplier-summary.component';
import { SupplierAnalysisComponent } from './supplier/supplier-analysis/supplier-analysis.component';
import { SupplierComponent } from './supplier/supplier.component';

const routes: Routes = [
  {
    path: 'admin',
    redirectTo: 'admin/inicio',
    pathMatch: 'full'
  },
  {
    path: 'admin/inicio', component: AdminComponent, children: [
      { path: '', outlet: 'admin', component: AdminHomeComponent, pathMatch: 'full' }
    ]
  },
  {
    path: 'admin/proveedores', component: AdminComponent, children: [
      { path: '', outlet: 'admin', component: SupplierListComponent, pathMatch: 'full' },
    ]
  },
  {
    path: 'admin/proveedores/:name/analisis', component: AdminComponent, children: [
      { path: '', outlet: 'admin', component: SupplierAnalysisComponent, pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
