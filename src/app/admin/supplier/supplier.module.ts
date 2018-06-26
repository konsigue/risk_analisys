/* Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SupplierRoutingModule } from './supplier.routing';

/* Components */
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { SupplierGeneralInfoComponent } from './supplier-general-info/supplier-general-info.component';
import { SupplierSummaryComponent } from './supplier-summary/supplier-summary.component';
import { SupplierDomicileComponent } from './supplier-domicile/supplier-domicile.component';
import { SupplierAnalysisComponent } from './supplier-analysis/supplier-analysis.component';
import { SupplierContactComponent } from './supplier-contact/supplier-contact.component';



@NgModule({
  imports: [
    CommonModule,
    SupplierRoutingModule,
    FormsModule
  ],
  declarations: [
      SupplierListComponent,
      SupplierSummaryComponent,
      SupplierDomicileComponent,
      SupplierGeneralInfoComponent,
      SupplierAnalysisComponent,
      SupplierContactComponent,
  ],
  bootstrap: [SupplierListComponent]
})
export class SupplierModule { }
