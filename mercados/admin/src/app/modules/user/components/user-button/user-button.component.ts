import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-button',
  templateUrl: './user-button.component.html',
  styleUrls: ['./user-button.component.scss']
})
export class UserButtonComponent {

  @Input() label: string;
  @Input() addClass: string;
}
