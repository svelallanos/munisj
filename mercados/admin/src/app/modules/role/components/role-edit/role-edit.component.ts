import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RoleService } from '../../services/role.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html',
  styleUrls: ['./role-edit.component.scss']
})
export class RoleEditComponent implements OnInit{
  
  @Input() role: any;
  @Output() RoleE: EventEmitter<any> = new EventEmitter();

  name: string;
  isLoading: any;
  
    constructor(
      public modal: NgbActiveModal,
      public roleService: RoleService,
    ) { }
  
    ngOnInit(): void {
      console.log(this.role);
      this.isLoading = this.roleService.isLoading$;
      this.cargarDatos();
      
    }

    cargarDatos(){
      this.name = this.role.name;
    }

    save(){
      let formData= new FormData();
      formData.append('name', this.name);

      this.roleService.updateRole(formData, this.role.id).subscribe((resp: any) => {
        console.log(resp);
        this.RoleE.emit(resp.role);
        this.modal.close();
        Swal.fire('Exito', 'Rol actualizado correctamente', 'success');
      });
    }

}
