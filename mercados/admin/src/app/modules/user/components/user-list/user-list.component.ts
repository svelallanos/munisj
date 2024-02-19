import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit{
  
  isLoading:any;

  constructor(
    public userService: UserService
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
    });
  }
}
