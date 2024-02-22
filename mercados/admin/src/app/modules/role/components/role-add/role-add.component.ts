import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PermisoService } from 'src/app/modules/permiso/services/permiso.service';
import { RoleService } from '../../services/role.service';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-role-add',
  templateUrl: './role-add.component.html',
  styleUrls: ['./role-add.component.scss'],
})
export class RoleAddComponent implements OnInit {
  @Output() RoleA: EventEmitter<any> = new EventEmitter();

  PERMISOS: any = [];
  search: any;
  state: any;
  name: string;
  description: string;

  constructor(
    public modal: NgbActiveModal,
    public permisoService: PermisoService,
    public roleService: RoleService,
    public toaster: ToastrService
  ) {}

  ngOnInit(): void {
    this.listPermisos();
    this.submit();
  }

  selectAll($event: any): void {
    const checkboxes = document.querySelectorAll(
      '.permiso_check'
    ) as NodeListOf<HTMLInputElement>;

    checkboxes.forEach((checkbox) => {
      checkbox.checked = $event.target.checked;
    });
  }

  listPermisos() {
    this.permisoService
      .listPermisos(this.search, this.state)
      .subscribe((resp: any) => {
        console.log(resp);
        this.PERMISOS = resp.permisos.data;
      });
  }

  submit() {
    $('#form_create_role').submit((e) => {
      e.preventDefault();

      if (!this.name) {
        this.toaster.warning('El nombre del rol es requerido.', 'Alerta');
        return;
      }

      let form = document.getElementById('form_create_role') as HTMLFormElement;
      let formData = new FormData(form);

      this.roleService.registerRoles(formData).subscribe((resp: any) => {
        console.log(resp);
        this.RoleA.emit(resp.role);
        this.modal.close();
        Swal.fire('Exito', 'Rol registrado satisfactoriamente', 'success');
      });
    });
  }
}
