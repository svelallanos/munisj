import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit{
  
  isLoading:any;
  USER:any = [];

  isPersonaNatural:any = 1;
  isEditar:any = 2;
  constructor(
    public userService: UserService
  ){}

  ngOnInit(): void {
    console.log(history.state.user);
    this.isLoading = this.userService.isLoading$;
    this.USER = history.state.user;
  }

  updateState(state:any)
  {
    this.isPersonaNatural = state;
  }

  habilitarEditar(state:any)
  {
    this.isEditar = state;
  }
}
