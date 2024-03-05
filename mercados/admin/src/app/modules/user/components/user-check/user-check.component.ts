import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-check',
  templateUrl: './user-check.component.html',
  styleUrls: ['./user-check.component.scss']
})
export class UserCheckComponent {
  @Input() checkName: string;
  @Input() checkType: string;
  @Input() checkValue: string;
  @Input() checkId: string;
  @Input() checkFor: string;
  @Input() checkLabel: string;
  @Input() checkDecription: string;
}
