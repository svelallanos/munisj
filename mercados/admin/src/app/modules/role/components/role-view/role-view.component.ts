import { Component } from '@angular/core';
import { RoleService } from '../../services/role.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RoleEditComponent } from '../role-edit/role-edit.component';

@Component({
  selector: 'app-role-view',
  templateUrl: './role-view.component.html',
  styleUrls: ['./role-view.component.scss']
})
export class RoleViewComponent {

  USUARIOS: any = [];
  PERMISOS: any = [];
  isLoading:any;
  role_name: any;

  constructor(
    public roleService : RoleService, 
    public modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    const arreglo = history.state.rol;
    console.log(arreglo);
    
    this.isLoading = this.roleService.isLoading$;
    this.USUARIOS = history.state.rol.usuarios;
    this.PERMISOS = history.state.rol.permisos;
    this.cargarData();
  }

  cargarData(){
    this.role_name = history.state.rol.name;
  }

}
