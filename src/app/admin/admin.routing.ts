import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminInicioComponent } from './Components/admin-inicio/admin-inicio.component';
import { adminComponent } from './admin.component';
import { ProvidersComponent } from './Components/providers/providers.component';
import { SupplierAnalysisComponent } from './Components/supplier-analysis/supplier-analysis.component';

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
    path: 'proveedores/:id/analisis', component: adminComponent, children: [
      { path: '', outlet: 'admin', component: SupplierAnalysisComponent, pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
