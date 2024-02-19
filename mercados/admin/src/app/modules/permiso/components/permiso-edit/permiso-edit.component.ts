import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PermisoService } from '../../services/permiso.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-permiso-edit',
  templateUrl: './permiso-edit.component.html',
  styleUrls: ['./permiso-edit.component.scss']
})
export class PermisoEditComponent implements OnInit{

  @Input() permiso:any;
  @Output() PermisoE: EventEmitter<any> = new EventEmitter();

  isLoading:any;
  name: any = null;
  description: any = null;
  state: any;
  newState:any;
  
  constructor(
    public modal: NgbActiveModal,
    public permisoService: PermisoService
  ) {}

  ngOnInit(): void {
    this.isLoading = this.permisoService.isLoading$;
    this.loadData();
  }

  loadData()
  {
    this.name = this.permiso.name;
    this.description = this.permiso.description;
    this.state = this.permiso.state;

    this.newState = this.permiso.state;
  }

  changeState(state:any)
  {
      this.newState = (state == 1 ? 2 : 1);
  }

  save()
  {
    if(!this.name)
    {
      // Mensaje de validacion
    }

    

    let formData = new FormData();
    formData.append("name", this.name);
    formData.append("description", this.description);
    formData.append("state", this.newState);

    this.permisoService.updatePermiso(formData, this.permiso.id).subscribe((resp:any) => {
      console.log(resp);
      this.PermisoE.emit(resp.permiso);
      Swal.fire(
        'CORRECTO',
        'Cambios guardado correctamente.',
        'success'
      );
      this.modal.close();
    });
  }

}
