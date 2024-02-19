import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit{

  ROLES: any; 
  constructor(
    public modal: NgbActiveModal
  ){}

  ngOnInit(): void {
    
  }

  listRoles()
  {

  }
}
