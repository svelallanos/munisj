import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PermisoRoutingModule } from './permiso-routing.module';
import { PermisoComponent } from './permiso.component';
import { PermisoListComponent } from './components/permiso-list/permiso-list.component';
import { PermisoEditComponent } from './components/permiso-edit/permiso-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { SharedModule } from "../../_metronic/shared/shared.module";
import { PermisoAddComponent } from './components/permiso-add/permiso-add.component';


@NgModule({
    declarations: [
        PermisoComponent,
        PermisoListComponent,
        PermisoEditComponent,
        PermisoAddComponent
    ],
    imports: [
        CommonModule,
        PermisoRoutingModule,
        HttpClientModule,
        FormsModule,
        NgbModule,
        ReactiveFormsModule,
        InlineSVGModule,
        NgbModalModule,
        SharedModule,
    ]
})
export class PermisoModule { }
