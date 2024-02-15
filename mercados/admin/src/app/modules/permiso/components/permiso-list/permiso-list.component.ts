import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PermisoAddComponent } from '../permiso-add/permiso-add.component';

@Component({
  selector: 'app-permiso-list',
  templateUrl: './permiso-list.component.html',
  styleUrls: ['./permiso-list.component.scss'],
})
export class PermisoListComponent implements OnInit {
  constructor(
    public modalService: NgbModal
    ) {}

  ngOnInit(): void {}

  openModalCreatePermiso() {
    const modalRef = this.modalService.open(PermisoAddComponent, {centered: true, size: 'md'});
  }
}
