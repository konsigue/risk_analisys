/* Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin.routing';

/* Components */
import { adminComponent } from './admin.component';
import { AdminInicioComponent } from './Components/admin-inicio/admin-inicio.component';
import { SideBarComponent } from './common/sidebar/sidebar.component';
import { HeaderAdminComponent } from './common/header/header.component';
import { ProvidersComponent } from './Components/providers/providers.component';
import { ProviderResumeComponent } from './Components/provider/provider-resume/provider-resume.component';
import { ProviderDomicileComponent } from './Components/provider/provider-domicile/provider-domicile.component';
import { ProviderGeneralInfoComponent } from './Components/provider/provider-general-info/provider-general-info.component';
import { MenuProvidersComponent } from './Components/menu-providers/menu-providers.component';


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
    ProvidersComponent,
    ProviderResumeComponent,
    ProviderDomicileComponent,
    ProviderGeneralInfoComponent,
    MenuProvidersComponent
  ],
  providers: [],
  bootstrap: [adminComponent]
})
export class AdminModule { }
