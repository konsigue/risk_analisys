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
import { LoginFormComponent } from './login/login-form/login-form.component';
import { PersonTypeComponent } from './login/person-type/person-type.component';

/* Services */
import { DataRegisterService } from './data-register.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    PersonTypeComponent
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
