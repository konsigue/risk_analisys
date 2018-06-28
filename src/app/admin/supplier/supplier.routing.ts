import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupplierSummaryComponent } from './supplier-summary/supplier-summary.component';
import { SupplierComponent } from './supplier.component';
import { AdminComponent } from '../admin.component';
import { ContactsSuppliersComponent } from './contacts-suppliers/contacts-suppliers.component';
import { ShareholdersSuppliersComponent } from './shareholders-suppliers/shareholders-suppliers.component';
import { FinancialStatementsComponent } from './financial-statements/financial-statements.component';
import { FinancialReasonsComponent } from './financial-reasons/financial-reasons.component';
import { DocumentsSuppliersComponent } from './documents-suppliers/documents-suppliers.component';
import { RpSuppliersComponent } from './rp-suppliers/rp-suppliers.component';



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
    path: 'admin/proveedor/contactos', component: AdminComponent, children: [
      {
        path: '', outlet: 'admin', component: SupplierComponent, pathMatch: 'full', children: [
          { path: '', outlet: 'supplier', component: ContactsSuppliersComponent, pathMatch: 'full' }
        ]
      },
    ]
  },
  {
    path: 'admin/proveedor/representante-legal', component: AdminComponent, children: [
      {
        path: '', outlet: 'admin', component: SupplierComponent, pathMatch: 'full', children: [
          { path: '', outlet: 'supplier', component: RpSuppliersComponent, pathMatch: 'full' }
        ]
      },
    ]
  },
  {
    path: 'admin/proveedor/razones-financieras', component: AdminComponent, children: [
      {
        path: '', outlet: 'admin', component: SupplierComponent, pathMatch: 'full', children: [
          { path: '', outlet: 'supplier', component: FinancialReasonsComponent, pathMatch: 'full' }
        ]
      },
    ]
  },
  {
    path: 'admin/proveedor/estados-financieros', component: AdminComponent, children: [
      {
        path: '', outlet: 'admin', component: SupplierComponent, pathMatch: 'full', children: [
          { path: '', outlet: 'supplier', component: FinancialStatementsComponent, pathMatch: 'full' }
        ]
      },
    ]
  },
  {
    path: 'admin/proveedor/accionistas', component: AdminComponent, children: [
      {
        path: '', outlet: 'admin', component: SupplierComponent, pathMatch: 'full', children: [
          { path: '', outlet: 'supplier', component: ShareholdersSuppliersComponent, pathMatch: 'full' }
        ]
      },
    ]
  },
  {
    path: 'admin/proveedor/documentos', component: AdminComponent, children: [
      {
        path: '', outlet: 'admin', component: SupplierComponent, pathMatch: 'full', children: [
          { path: '', outlet: 'supplier', component: DocumentsSuppliersComponent, pathMatch: 'full' }
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
