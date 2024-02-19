import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from '../../services/user.service';
import { RoleService } from 'src/app/modules/role/services/role.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit{

  @Output() UserA: EventEmitter<any> = new EventEmitter();
  
  ROLES: any;
  isLoading:any;

  constructor(
    public modal: NgbActiveModal,
    public userService: UserService,
    public roleService: RoleService,
  ){}

  ngOnInit(): void {
    this.isLoading = this.userService.isLoading$;
    this.listRoles();
    this.submit();
  }

  listRoles()
  {
    this.roleService.listRoles().subscribe((resp: any) => {
      console.log(resp);
      this.ROLES = resp.roles.data;
    });
  }

  submit() {
    $('#form_register_user').submit((e) => {
      e.preventDefault();

      let form = document.getElementById('form_register_user') as HTMLFormElement;
      let formData = new FormData(form);

      this.userService
        .registerUser(formData)
        .subscribe((resp: any) => {
          console.log(resp);
          this.UserA.emit(resp.user);
          this.modal.close();
          Swal.fire('Exito', 'Usuario registrado correctamente', 'success');
        });
    });
  }
}
