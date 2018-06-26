import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminHomeComponent } from './home/admin-home/admin-home.component';
import { SupplierListComponent } from './supplier/supplier-list.component';
import { ProviderResumeComponent } from './Components/provider/provider-resume/provider-resume.component';

const routes: Routes = [
  {
    path: '../admin/',
    redirectTo: 'admin/inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio', component: AdminComponent, children: [
      { path: '', outlet: 'admin', component: AdminHomeComponent, pathMatch: 'full' }
    ]
  },
 {
   path: 'proveedores', component: AdminComponent, children: [
     { path: '', outlet: 'admin', component: SupplierListComponent, pathMatch: 'full' },
   ]
 },
 {
  path: 'resumen', component: AdminComponent, children: [
    { path: '', outlet: 'admin', component: ProviderResumeComponent, pathMatch: 'full' },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
