/* Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RiskAnalysisRoutingModule } from './risk-analysis.routing';

/* Components */
import { SupplierAnalysisComponent } from './supplier-analysis.component';
import { AnalysisFinancialStatusComponent } from './analysis-financial-status/analysis-financial-status.component';


@NgModule({
  imports: [
    CommonModule,
    RiskAnalysisRoutingModule
  ],
  declarations: [
      SupplierAnalysisComponent,
      AnalysisFinancialStatusComponent
  ],
  bootstrap: [SupplierAnalysisComponent]
})
export class RiskAnalysisModule { }