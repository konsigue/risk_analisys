import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminInicioComponent } from './Components/admin-inicio/admin-inicio.component';
import { adminComponent } from './admin.component';
import { ProvidersComponent } from './Components/providers/providers.component';
import { ProviderResumeComponent } from './Components/provider/provider-resume/provider-resume.component';

const routes: Routes = [
  {
    path: '../admin/',
    redirectTo: 'admin/inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio', component: adminComponent, children: [
      { path: '', outlet: 'admin', component: AdminInicioComponent, pathMatch: 'full' }
    ]
  },
 {
   path: 'proveedores', component: adminComponent, children: [
     { path: '', outlet: 'admin', component: ProvidersComponent, pathMatch: 'full' },
   ]
 },
 {
  path: 'resumen', component: adminComponent, children: [
    { path: '', outlet: 'admin', component: ProviderResumeComponent, pathMatch: 'full' },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }