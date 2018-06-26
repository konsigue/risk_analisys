/* Dependencies */
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
import { RegisterModule } from './register/register.module';
import { AdminModule } from './admin/admin.module';

/* Components */

import { RecoverPasswordComponent } from './register/recover-password/recover-password.component';
import { RegistroMoralComponent } from './register/registro-moral/registro-moral.component';
import { DatosRepresentanteRmComponent } from './register/datos-representante-rm/datos-representante-rm.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistroFisicoComponent } from './register/registro-fisico/registro-fisico.component';
import { RegistroFComponent } from './register/registro-f/registro-f.component';
import { DocumentsFinancialStateComponent } from './register/documents-financial-state/documents-financial-state.component';
import { FinancialStatementComponent } from './register/financial-statement/financial-statement.component';
import { FinancialRatiosComponent } from './register/financial-ratios/financial-ratios.component';
import { CIECComponent} from './register/ciec/ciec.component';
import { DomicilioComponent} from './register/domicilio/domicilio.component';
import { TarjetaComponent} from './register/tarjeta/tarjeta.component';
import { ListProvComponent } from './list-prov/list-prov.component';

import { HeaderComponent } from './register/header/header.component';

const appRoutes: Routes = [
  { path: 'switch', component: RegistroFisicoComponent },
  { path: 'login', component: LoginFormComponent },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'registro-fisico', component: RegistroFComponent },
  { path: 'Recuperar-password', component: RecoverPasswordComponent },
  { path: 'Registro-Moral', component: RegistroMoralComponent },
  { path: 'Representante', component: DatosRepresentanteRmComponent },
  { path: 'Estado-Financiero', component: FinancialStatementComponent },
  { path: 'Razones-Financieras', component: FinancialRatiosComponent },
  { path: 'domicilio', component: DomicilioComponent },
  { path: 'tarjeta', component: TarjetaComponent },
  { path: 'ciec', component: CIECComponent },
  { path: 'list-prov', component: ListProvComponent},
];

/* Services */
import { DataRegisterService } from './data-register.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegistroFisicoComponent,
    RegistroFComponent,
    RecoverPasswordComponent,
    RegistroMoralComponent,
    DatosRepresentanteRmComponent,
    DocumentsFinancialStateComponent,
    FinancialStatementComponent,
    FinancialRatiosComponent,
    CIECComponent,
    DomicilioComponent,
    TarjetaComponent,
    ListProvComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AdminModule,
    RegisterModule
  ],
  providers: [DataRegisterService],
  bootstrap: [AppComponent]
})

export class AppModule { }
