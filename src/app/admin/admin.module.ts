/* Modules */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin.routing';

/* Components */
import { AdminComponent } from './admin.component';
import { SideBarComponent } from './common/sidebar/sidebar.component';
import { HeaderAdminComponent } from './common/header/header.component';
import { AdminHomeComponent } from './home/admin-home/admin-home.component';
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
    AdminComponent,
    AdminHomeComponent,
    SideBarComponent,
    HeaderAdminComponent,
    ProvidersComponent,
    ProviderResumeComponent,
    ProviderDomicileComponent,
    ProviderGeneralInfoComponent,
    MenuProvidersComponent
  ],
  providers: [],
  bootstrap: [AdminComponent]
})
export class AdminModule { }
