import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit{
  
  isLoading:any;
  user_id:any;

  isPersonaNatural:any = 1;
  isEditar:any = 2;
  constructor(
    public userService: UserService,
    public route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.isLoading = this.userService.isLoading$;

    this.route.queryParams.subscribe((params:any) => {
      this.user_id = params['id'];
      console.log(params);
      this.showUser();
      
    });
  }

  showUser()
  {
    this.userService.showUser(this.user_id).subscribe((resp:any) => {
      console.log(resp);
      
    });
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
