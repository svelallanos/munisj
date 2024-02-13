import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleRoutingModule } from './role-routing.module';
import { RoleComponent } from './role.component';
import { RoleAddComponent } from './components/role-add/role-add.component';
import { RoleListComponent } from './components/role-list/role-list.component';
import { RoleEditComponent } from './components/role-edit/role-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { InlineSVGModule } from 'ng-inline-svg-2';


@NgModule({
  declarations: [
    RoleComponent,
    RoleAddComponent,
    RoleListComponent,
    RoleEditComponent
  ],
  imports: [
    CommonModule,
    RoleRoutingModule,

    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    InlineSVGModule,
    NgbModalModule,
  ]
})
export class RoleModule { }
