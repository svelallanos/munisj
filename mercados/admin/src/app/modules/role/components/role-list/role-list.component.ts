import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../services/role.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RoleAddComponent } from '../role-add/role-add.component';
import { RoleEditComponent } from '../role-edit/role-edit.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
  styleUrls: ['./role-list.component.scss']
})
export class RoleListComponent implements OnInit{

  ROLES: any = [];
  isLoading:any;

  constructor(
    public roleService : RoleService, 
    public modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.isLoading = this.roleService.isLoading$;
    this.listRoles();
  }

  openModalCreateRole(){
    const modalRef = this.modalService.open(RoleAddComponent,{centered: true, size: 'lg'});

    modalRef.componentInstance.RoleA.subscribe((Role:any) => {
      console.log(Role);
      this.ROLES.unshift(Role);
    });
  }

  openModalEditRole(ROLE:any){
    const modalRef = this.modalService.open(RoleEditComponent,{centered: true, size: 'lg'});
    modalRef.componentInstance.role = ROLE;

    modalRef.componentInstance.RoleE.subscribe((Role:any) => {
      let INDEX = this.ROLES.findIndex((item:any) => item.id == Role.id);
      this.ROLES[INDEX] = Role;
    });
  }

  listRoles()
  {
    this.roleService.listRoles().subscribe((resp:any) => {
      console.log(resp);
      this.ROLES = resp.roles.data;
    });
  }

  deleteRole(ROLE:any){
    Swal.fire({
      title: '¿Estás seguro de eliminar el registro: # '+ROLE.id+'? ',
      html: '<h2>'+ROLE.name+'</h2>'+'¡No podrás revertir eso!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, bórralo',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.roleService.deleteRole(ROLE.id).subscribe((resp: any) => {
        let INDEX = this.ROLES.findIndex((item: any) => item.id == ROLE.id);
        this.ROLES.splice(INDEX, 1);
          Swal.fire(
            'Eliminar',
            'Registro eliminado correctamente.',
            'success'
          );
        });
      }
    });
  }
}
