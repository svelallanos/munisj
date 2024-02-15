import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PermisoAddComponent } from '../permiso-add/permiso-add.component';
import { PermisoService } from '../../services/permiso.service';
import { PermisoEditComponent } from '../permiso-edit/permiso-edit.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-permiso-list',
  templateUrl: './permiso-list.component.html',
  styleUrls: ['./permiso-list.component.scss'],
})
export class PermisoListComponent implements OnInit {
  isLoading: any;

  search: string;
  state: string;

  PERMISOS: any = [];

  constructor(
    public modalService: NgbModal,
    public permisoService: PermisoService
  ) {}

  ngOnInit(): void {
    this.isLoading = this.permisoService.isLoading$;
    this.listPermiso();
  }

  listPermiso() {
    this.permisoService
      .listPermisos(this.search, this.state)
      .subscribe((resp: any) => {
        console.log(resp);
        this.PERMISOS = resp.permisos.data;
      });
  }

  openModalCreatePermiso() {
    const modalRef = this.modalService.open(PermisoAddComponent, {
      centered: true,
      size: 'md',
    });

    modalRef.componentInstance.PermisoA.subscribe((Permiso: any) => {
      console.log(Permiso);
      this.PERMISOS.unshift(Permiso);
    });
  }

  openModalEditPermiso(PERMISO: any) {
    const modalRef = this.modalService.open(PermisoEditComponent, {
      centered: true,
      size: 'md',
    });
    modalRef.componentInstance.permiso = PERMISO;

    modalRef.componentInstance.PermisoE.subscribe((Permiso: any) => {
      console.log(Permiso);
      let INDEX = this.PERMISOS.findIndex((item: any) => item.id == Permiso.id);
      this.PERMISOS[INDEX] = Permiso;
    });
  }

  deletePermiso(PERMISO:any)
  {
    Swal.fire({
      title: '¿Estás seguro de eliminar el registro: # '+PERMISO.id+'? ',
      html: '<h2>'+PERMISO.name+'</h2>'+'¡No podrás revertir eso!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, bórralo',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.permisoService.deletePermiso(PERMISO.id).subscribe((resp: any) => {
        let INDEX = this.PERMISOS.findIndex((item: any) => item.id == PERMISO.id);
        this.PERMISOS.splice(INDEX, 1);
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
