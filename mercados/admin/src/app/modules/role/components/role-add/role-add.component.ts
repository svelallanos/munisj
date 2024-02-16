import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PermisoService } from 'src/app/modules/permiso/services/permiso.service';
import { RoleService } from '../../services/role.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-role-add',
  templateUrl: './role-add.component.html',
  styleUrls: ['./role-add.component.scss']
})
export class RoleAddComponent implements OnInit{

    PERMISOS: any = [];
    search: any;
    state: any;
    name: string;
  
    constructor(
      public modal: NgbActiveModal,
      public permisoService: PermisoService,
      public roleService: RoleService,
    ) { }
  
    ngOnInit(): void {
      this.listPermisos();
    }

    listPermisos()
    {
      this.permisoService.listPermisos(this.search, this.state).subscribe((resp: any) => {
        console.log(resp);
        this.PERMISOS = resp.permisos.data;
      });
    }

    save(){
      let formData= new FormData();
      formData.append('name', this.name);

      this.roleService.registerRoles(formData).subscribe((resp: any) => {
        console.log(resp);
        this.modal.close();
        Swal.fire('Exito', 'Rol registrado correctamente', 'success');
      });
    }
}
