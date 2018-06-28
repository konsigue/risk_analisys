import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SupplierAnalysisComponent } from './supplier-analysis.component';

const routes: Routes = [
  {
    path: 'admin/proveedores/:name/analisis/status', component: SupplierAnalysisComponent, children: [
      { path: '', outlet: 'risk-analysis', component: SupplierAnalysisComponent, pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RiskAnalysisRoutingModule { }
