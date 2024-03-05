import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.scss']
})
export class UserInputComponent {
  @Input() inputLabel:string;
  @Input() inputName:string;
  @Input() inputPlaceholder:string;
  @Input() inputType:string;
}
