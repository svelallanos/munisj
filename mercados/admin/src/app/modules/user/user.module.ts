import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { UserComponent } from './user.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserDeleteComponent } from './components/user-delete/user-delete.component';
import { UserAddComponent } from './containers/user-add/user-add.component';
import { UserListComponent } from './containers/user-list/user-list.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { UserButtonComponent } from './components/user-button/user-button.component';
import { UserCheckComponent } from './components/user-check/user-check.component';


@NgModule({
  declarations: [
    UserComponent,
    UserListComponent,
    UserAddComponent,
    UserEditComponent,
    UserDeleteComponent,
    UserInputComponent,
    UserTableComponent,
    UserButtonComponent,
    UserCheckComponent,
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    InlineSVGModule,
    NgbModalModule,
  ]
})
export class UserModule { }
