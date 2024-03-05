import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserAddComponent } from '../../containers/user-add/user-add.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit{
  
  isLoading:any;
  USUARIOS:any = [];
  ROLES:any = [];

  constructor(
    public userService: UserService,
    public modalService: NgbModal,
  ){
  }

  ngOnInit(): void {
    this.isLoading = this.userService.isLoading$;
    this.listUsers();
  }

  listUsers()
  {
    this.userService.listUser().subscribe((resp:any)=>{
      console.log(resp);
      this.USUARIOS = resp.users.data;
    });
  }

  openModalCreateUser()
  {
    let modalRef = this.modalService.open(UserAddComponent, {centered: true, size: 'md'});
    
    modalRef.componentInstance.UserA.subscribe((User:any) => {
      this.USUARIOS.unshift(User);
    });
  }
}
