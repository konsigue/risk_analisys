import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminInicioComponent } from './Components/admin-inicio/admin-inicio.component';
import { adminComponent } from './admin.component';

const routes: Routes = [
  {path: '', component: adminComponent},
  {path: 'Inicio', component: AdminInicioComponent, outlet: "adminRouter"},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
