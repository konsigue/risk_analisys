/* Modules */
import { NgModule } from '@angular/core';

/* Components */
import { SupplierListComponent } from './supplier-list.component';
import { SupplierGeneralInfoComponent } from './supplier-general-info/supplier-general-info.component';
import { SupplierSummaryComponent } from './supplier-summary/supplier-summary.component';
import { SupplierDomicileComponent } from './supplier-domicile/supplier-domicile.component';
import { MenuSuppliersComponent } from './menu-suppliers/menu-suppliers.component';


@NgModule({
    declarations: [
        SupplierListComponent,
        SupplierSummaryComponent,
        SupplierDomicileComponent,
        SupplierGeneralInfoComponent,
        MenuSuppliersComponent
    ]
})
export class SupplierModule { }
