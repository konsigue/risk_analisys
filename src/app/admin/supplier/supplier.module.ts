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
import { ShareholdersSuppliersComponent } from './shareholders-suppliers/shareholders-suppliers.component';
import { ContactsSuppliersComponent } from './contacts-suppliers/contacts-suppliers.component';
import { RpSuppliersComponent } from './rp-suppliers/rp-suppliers.component';
import { DocumentsSuppliersComponent } from './documents-suppliers/documents-suppliers.component';
import { FinancialReasonsComponent } from './financial-reasons/financial-reasons.component';
import { FinancialStatementsComponent } from './financial-statements/financial-statements.component';



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
      ShareholdersSuppliersComponent,
      ContactsSuppliersComponent,
      RpSuppliersComponent,
      DocumentsSuppliersComponent,
      FinancialReasonsComponent,
      FinancialStatementsComponent,
      ContactsSuppliersComponent,
  ],
  bootstrap: [SupplierListComponent]
})
export class SupplierModule { }
