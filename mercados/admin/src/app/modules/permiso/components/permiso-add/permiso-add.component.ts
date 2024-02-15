import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-permiso-add',
  templateUrl: './permiso-add.component.html',
  styleUrls: ['./permiso-add.component.scss'],
})
export class PermisoAddComponent implements OnInit {
  name: string;

  constructor(public modal: NgbActiveModal) {}

  ngOnInit(): void {}
}
