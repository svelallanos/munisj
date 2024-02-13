import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleComponent } from './role.component';
import { RoleListComponent } from './components/role-list/role-list.component';
import { RoleAddComponent } from './components/role-add/role-add.component';
import { RoleEditComponent } from './components/role-edit/role-edit.component';

const routes: Routes = [{
  path: '',
  component: RoleComponent,
  children: [
    {
      path: 'list',
      component: RoleListComponent,
    },
    {
      path: 'register',
      component: RoleAddComponent
    },
    {
      path: 'edit',
      component: RoleEditComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
