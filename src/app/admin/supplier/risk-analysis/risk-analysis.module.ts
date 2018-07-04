/* Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { RiskAnalysisRoutingModule } from './risk-analysis.routing';

/* Components */
import { SupplierAnalysisComponent } from './supplier-analysis.component';
import { AnalysisFinancialStatusComponent } from './analysis-financial-status/analysis-financial-status.component';
import { AnalysisInvoicingComponent } from './analysis-invoicing/analysis-invoicing.component';
import { AnalysisFinancialComponent } from './analysis-financial/analysis-financial.component';
import { FinanceInstitutionsComponent } from './finance-institutions/finance-institutions.component';
import { AnalysisBusinessComponent } from './analysis-business/analysis-business.component';


@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    RiskAnalysisRoutingModule
  ],
  declarations: [
      SupplierAnalysisComponent,
      AnalysisFinancialStatusComponent,
      AnalysisInvoicingComponent,
      AnalysisFinancialComponent,
      FinanceInstitutionsComponent,
      AnalysisBusinessComponent
  ],
  bootstrap: [SupplierAnalysisComponent]
})
export class RiskAnalysisModule { }