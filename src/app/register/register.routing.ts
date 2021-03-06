import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { RegistroMoralComponent } from './registro-moral/registro-moral.component';
import { DatosRepresentanteRmComponent } from './datos-representante-rm/datos-representante-rm.component';
import { PersonTypeComponent } from '../login/person-type/person-type.component';
import { RegistroFComponent } from './registro-f/registro-f.component';
import { FinancialStatementComponent } from './financial-statement/financial-statement.component';
import { FinancialRatiosComponent } from './financial-ratios/financial-ratios.component';
import { CIECComponent}  from "./ciec/ciec.component";
import { DomicilioComponent}  from "./domicilio/domicilio.component";
import { TarjetaComponent}  from "./tarjeta/tarjeta.component";
import { ContactosComponent } from './contacts/contactos.component';
import { RegistroAccionistasComponent } from './registro-accionistas/registro-accionistas.component';


const routes: Routes = [
  { path: 'registro/switch', component: PersonTypeComponent },
  { path: 'registro/registro-fisico', component: RegistroFComponent },
  { path: 'registro/Recuperar-password', component: RecoverPasswordComponent },
  { path: 'registro/Registro-Moral', component: RegistroMoralComponent },
  { path: 'registro/Representante', component: DatosRepresentanteRmComponent },
  { path: 'registro/Estado-Financiero', component: FinancialStatementComponent },
  { path: 'registro/Razones-Financieras', component: FinancialRatiosComponent },
  { path: 'registro/domicilio', component: DomicilioComponent },
  { path: 'registro/tarjeta', component: TarjetaComponent },
  { path: 'registro/ciec', component: CIECComponent },
  { path: 'registro/contactos', component: ContactosComponent },
  { path: 'registro/accionistas', component: RegistroAccionistasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
