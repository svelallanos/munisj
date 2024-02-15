import { Component, OnInit } from '@angular/core';
import { RoleService } from '../../services/role.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RoleAddComponent } from '../role-add/role-add.component';

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
  }

  listRoles()
  {
    this.roleService.listRoles().subscribe((resp:any) => {
      console.log(resp);
      this.ROLES = resp.roles.data;
    });
  }
}
