/* Modules */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register.routing';

/* Components */
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { RegistroMoralComponent } from './registro-moral/registro-moral.component';
import { DatosRepresentanteRmComponent } from './datos-representante-rm/datos-representante-rm.component';
import { RegistroFComponent } from './registro-f/registro-f.component';
import { DocumentsFinancialStateComponent } from './documents-financial-state/documents-financial-state.component';
import { FinancialStatementComponent } from './financial-statement/financial-statement.component';
import { FinancialRatiosComponent } from './financial-ratios/financial-ratios.component';
import { CIECComponent}  from "./ciec/ciec.component";
import { DomicilioComponent}  from "./domicilio/domicilio.component";
import { TarjetaComponent}  from "./tarjeta/tarjeta.component";
import { ContactosComponent } from './contacts/contactos.component';
import { HeaderComponent } from "./header/header.component";
import { RegistroAccionistasComponent } from './registro-accionistas/registro-accionistas.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    imports: [
        RegisterRoutingModule,
        FormsModule,
        CommonModule,
        HttpClientModule
    ],
    declarations: [
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
        ContactosComponent,
        HeaderComponent,
        RegistroAccionistasComponent,
    ]
})
export class RegisterModule { }
