import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleComponent } from './role.component';
import { RoleListComponent } from './components/role-list/role-list.component';

const routes: Routes = [{
  path: '',
  component: RoleComponent,
  children: [
    {
      path: 'list',
      component: RoleListComponent,
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
