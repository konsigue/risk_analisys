import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupplierAnalysisComponent } from './supplier-analysis.component';
import { AnalysisFinancialStatusComponent } from './analysis-financial-status/analysis-financial-status.component';
import { AdminComponent } from '../../admin.component';
import { AnalysisInvoicingComponent } from './analysis-invoicing/analysis-invoicing.component';

const routes: Routes = [
  {
    path: 'admin/proveedores/:name/analisis/estatus', component: AdminComponent, children: [
      { 
        path: '', outlet: 'admin', component: SupplierAnalysisComponent, children: [
          { path: '', outlet: 'risk-analysis', component: AnalysisFinancialStatusComponent }
        ]
      }
    ]
  },
  {
    path: 'admin/proveedores/:name/analisis/facturacion', component: AdminComponent, children: [
      { 
        path: '', outlet: 'admin', component: SupplierAnalysisComponent, children: [
          { path: '', outlet: 'risk-analysis', component: AnalysisInvoicingComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RiskAnalysisRoutingModule { }
