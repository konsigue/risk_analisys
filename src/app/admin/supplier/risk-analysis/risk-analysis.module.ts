/* Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RiskAnalysisRoutingModule } from './risk-analysis.routing';
import { ChartsModule } from 'ng2-charts';

/* Components */
import { SupplierAnalysisComponent } from './supplier-analysis.component';
import { AnalysisFinancialStatusComponent } from './analysis-financial-status/analysis-financial-status.component';
import { AnalysisInvoicingComponent } from './analysis-invoicing/analysis-invoicing.component';
import { AnalysisFinancialComponent } from './analysis-financial/analysis-financial.component';


@NgModule({
  imports: [
    CommonModule,
    RiskAnalysisRoutingModule,
    ChartsModule
  ],
  declarations: [
      SupplierAnalysisComponent,
      AnalysisFinancialStatusComponent,
      AnalysisInvoicingComponent,
      AnalysisFinancialComponent
  ],
  bootstrap: [SupplierAnalysisComponent]
})
export class RiskAnalysisModule { }