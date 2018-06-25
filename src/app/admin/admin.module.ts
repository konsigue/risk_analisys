/* Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin.routing';

/* Components */
import { adminComponent } from './admin.component';
import { AdminInicioComponent } from './Components/admin-inicio/admin-inicio.component';
import { SideBarComponent } from './Components/Sidebar/sidebar.component';
import { HeaderAdminComponent } from './Components/header/header.component';
import { ProvidersComponent } from './Components/providers/providers.component';
import { ProviderDomicileComponent } from './Components/provider/provider-domicile/provider-domicile.component';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
  ],
  declarations: [
    AdminInicioComponent,
    adminComponent,
    SideBarComponent,
    HeaderAdminComponent,
    ProvidersComponent
    ProviderDomicileComponent,
  ],
  providers: [],
  bootstrap: [adminComponent]
})
export class AdminModule { }
