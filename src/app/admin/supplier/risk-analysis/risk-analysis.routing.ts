import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupplierAnalysisComponent } from './supplier-analysis.component';
import { AnalysisFinancialStatusComponent } from './analysis-financial-status/analysis-financial-status.component';
import { AdminComponent } from '../../admin.component';
import { AnalysisInvoicingComponent } from './analysis-invoicing/analysis-invoicing.component';
import { AnalysisFinancialComponent } from './analysis-financial/analysis-financial.component';
import { AnalysisComplianceComponent } from './analysis-compliance/analysis-compliance.component';
import { FinanceInstitutionsComponent } from './finance-institutions/finance-institutions.component';
import { OperativenessComponent } from './operativeness/operativeness.component';

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
  },
  {
    path: 'admin/proveedores/:name/analisis/financiero', component: AdminComponent, children: [
      {
        path: '', outlet: 'admin', component: SupplierAnalysisComponent, children: [
          { path: '', outlet: 'risk-analysis', component: AnalysisFinancialComponent }
        ]
      }
    ]
  },
  {
    path: 'admin/proveedores/:name/analisis/compliance', component: AdminComponent, children: [
      { 
        path: '', outlet: 'admin', component: SupplierAnalysisComponent, children: [
          { path: '', outlet: 'risk-analysis', component: AnalysisComplianceComponent }
        ]
      }
    ]
  },
  {
    path: 'admin/proveedores/:name/analisis/instituciones', component: AdminComponent, children: [
      {
        path: '', outlet: 'admin', component: SupplierAnalysisComponent, children: [
          { path: '', outlet: 'risk-analysis', component: FinanceInstitutionsComponent }
        ]
      }
    ]
  },
  {
    path: 'admin/proveedores/:name/analisis/operatividad', component: AdminComponent, children: [
      {
        path: '', outlet: 'admin', component: SupplierAnalysisComponent, children: [
          { path: '', outlet: 'risk-analysis', component: OperativenessComponent }
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
