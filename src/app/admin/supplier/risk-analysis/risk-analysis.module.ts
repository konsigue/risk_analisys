/* Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Components */
import { SupplierAnalysisComponent } from './supplier-analysis.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
      SupplierAnalysisComponent
  ],
  bootstrap: [SupplierAnalysisComponent]
})
export class RiskAnalysisModule { }