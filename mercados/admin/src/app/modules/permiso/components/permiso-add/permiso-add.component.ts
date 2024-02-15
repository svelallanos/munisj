import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PermisoService } from '../../services/permiso.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-permiso-add',
  templateUrl: './permiso-add.component.html',
  styleUrls: ['./permiso-add.component.scss'],
})
export class PermisoAddComponent implements OnInit {
  name: any = null;
  description: any = null;

  @Output() PermisoA: EventEmitter<any> = new EventEmitter();

  constructor(
    public modal: NgbActiveModal,
    public permisoService: PermisoService
  ) {}

  ngOnInit(): void {}

  save() {
    if (!this.name) {
      // Mensaje de validacion
    }

    let formData = new FormData();
    formData.append('name', this.name);
    formData.append('description', this.description);

    this.permisoService.registerPermiso(formData).subscribe((resp: any) => {
      console.log(resp);
      this.PermisoA.emit(resp.permiso);
      Swal.fire('CORRECTO', 'Registro guardado correctamente.', 'success');
      this.modal.close();
    });
  }
}
