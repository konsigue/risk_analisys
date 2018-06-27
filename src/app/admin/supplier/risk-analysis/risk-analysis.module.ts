/* Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RiskAnalysisRoutingModule } from './risk-analysis.routing';

/* Components */
import { SupplierAnalysisComponent } from './supplier-analysis.component';


@NgModule({
  imports: [
    CommonModule,
    RiskAnalysisRoutingModule
  ],
  declarations: [
      SupplierAnalysisComponent
  ],
  bootstrap: [SupplierAnalysisComponent]
})
export class RiskAnalysisModule { }