import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermisoComponent } from './permiso.component';
import { PermisoListComponent } from './components/permiso-list/permiso-list.component';
import { PermisoEditComponent } from './components/permiso-edit/permiso-edit.component';

const routes: Routes = [{
  path: '',
  component: PermisoComponent,
  children: [
    {
      path: 'list',
      component: PermisoListComponent
    },
    {
      path: 'edit',
      component: PermisoEditComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermisoRoutingModule { }
