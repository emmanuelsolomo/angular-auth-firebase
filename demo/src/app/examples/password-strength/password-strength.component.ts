import {Component} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ExampleBaseComponent} from '../example.abstract';

@Component({
  selector: 'app-password-strength',
  templateUrl: 'password-strength.component.html',
  styleUrls: ['password-strength.component.scss']
})
export class PasswordStrengthComponent extends ExampleBaseComponent {

  example = `<ngx-auth-firebaseui tabIndex="1"
                             [min]="8"
                             [max]="15"
                             [enableLengthRule]="true"
                             [enableLowerCaseLetterRule]="true"
                             [enableUpperCaseLetterRule]="true"
                             [enableDigitRule]="true"
                             [enableSpecialCharRule]="true"
                             (onStrengthChanged)="onStrengthChanged($event)">
        </ngx-auth-firebaseui>`;

  constructor(public snackBar: MatSnackBar) {
    super(snackBar);
  }

  onStrengthChanged($event: number) {
    console.log('on strength changed: ', $event);
  }

}
