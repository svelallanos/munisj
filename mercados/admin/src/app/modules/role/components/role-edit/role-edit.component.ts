import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RoleService } from '../../services/role.service';
import Swal from 'sweetalert2';
import { PermisoService } from 'src/app/modules/permiso/services/permiso.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html',
  styleUrls: ['./role-edit.component.scss'],
})
export class RoleEditComponent implements OnInit {
  @Input() role: any;
  @Output() RoleE: EventEmitter<any> = new EventEmitter();

  name: string;
  description: string;
  isLoading: any;

  PERMISOS: any = [];
  PERMISOS_ALL: any = [];

  search: any;
  state: any;
  newState: any;

  constructor(
    public modal: NgbActiveModal,
    public roleService: RoleService,
    public permisoService: PermisoService,
    public toaster: ToastrService
  ) {}

  ngOnInit(): void {
    this.isLoading = this.roleService.isLoading$;
    this.cargarDatos();
    this.submit();
  }

  cargarDatos() {
    this.newState = this.role.state;
    this.name = this.role.name;
    this.description = this.role.description;
    this.PERMISOS = this.role.permisos;
    this.permisosAll();
  }

  permisosAll() {
    this.permisoService
      .listPermisos(this.search, this.state)
      .subscribe((resp: any) => {
        resp.permisos.data.forEach((obj: any) => {
          obj.view = 2;
          obj.write = 2;
          obj.create = 2;
        });

        this.PERMISOS_ALL = resp.permisos.data.map((itemNew: any) => {
          let newObjet = this.role.permisos.find(
            (item: any) => item.id == itemNew.id
          );
          return newObjet ? newObjet : itemNew;
        });
      });
  }

  selectAll($event: any): void {
    const checkboxes = document.querySelectorAll(
      '.permiso_check'
    ) as NodeListOf<HTMLInputElement>;
    checkboxes.forEach((checkbox) => {
      checkbox.checked = $event.target.checked;
    });
  }

  submit() {
    $('#form_update_role').submit((e) => {
      e.preventDefault();

      let form = document.getElementById('form_update_role') as HTMLFormElement;
      let formData = new FormData(form);

      this.roleService
        .updateRole(formData, this.role.id)
        .subscribe((resp: any) => {
          console.log(resp);
          this.RoleE.emit(resp.role);
          this.modal.close();
          Swal.fire('Exito', 'Rol actualizado correctamente', 'success');
        });
    });
  }

  changeState(state: any) {
    let auxState = state;
    let nameState = 'habilitar';

    auxState = state == 1 ? 2 : 1;
    this.newState = auxState;
    if (state == 1) {
      nameState = 'desabilitar';
    }

    Swal.fire({
      title:
        '¿Estás seguro de ' +
        nameState +
        ' el registro: # ' +
        this.role.id +
        '? ',
      html: '<h2>' + this.role.name + '</h2>',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.roleService
          .changeStateRole(this.role.id, { state: auxState })
          .subscribe((resp: any) => {
            console.log(resp);
            this.newState = auxState;
            this.RoleE.emit(resp.role);
            this.modal.close();
            this.toaster.success('Rol actualizado satisfactoriamente','Exito');
          });
      } else {
        this.newState = state;
      }
    });
  }
}
