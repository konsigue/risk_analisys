import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistroFisicoComponent } from './registro-fisico/registro-fisico.component';
import { RegistroFComponent } from './registro-f/registro-f.component';


const appRoutes: Routes = [
  { path: 'switch', component: RegistroFisicoComponent },
  { path: 'login', component: LoginFormComponent },
  { path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: 'registro-fisico', component: RegistroFComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegistroFisicoComponent,
    RegistroFComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    BrowserModule, 
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
