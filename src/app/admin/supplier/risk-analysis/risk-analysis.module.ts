/* Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { RiskAnalysisRoutingModule } from './risk-analysis.routing';
import {
  MatToolbarModule,
  MatTableModule,
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

/* Components */
import { SupplierAnalysisComponent } from './supplier-analysis.component';
import { AnalysisFinancialStatusComponent } from './analysis-financial-status/analysis-financial-status.component';
import { AnalysisInvoicingComponent } from './analysis-invoicing/analysis-invoicing.component';
import { AnalysisFinancialComponent } from './analysis-financial/analysis-financial.component';
import { AnalysisComplianceComponent } from './analysis-compliance/analysis-compliance.component';
import { FinanceInstitutionsComponent } from './finance-institutions/finance-institutions.component';
import { AnalysisBusinessComponent } from './analysis-business/analysis-business.component';
import { OperativenessComponent } from './operativeness/operativeness.component';


@NgModule({
  imports: [
    CommonModule,
    ChartsModule,
    RiskAnalysisRoutingModule,
    MatToolbarModule,
    MatTableModule,
    BrowserAnimationsModule
  ],
  declarations: [
      SupplierAnalysisComponent,
      AnalysisFinancialStatusComponent,
      AnalysisInvoicingComponent,
      AnalysisFinancialComponent,
      AnalysisBusinessComponent,
      AnalysisComplianceComponent,
      FinanceInstitutionsComponent,
      OperativenessComponent
  ],
  bootstrap: [SupplierAnalysisComponent]
})
export class RiskAnalysisModule { }