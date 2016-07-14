import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdIcon } from '@angular2-material/icon';
import { MdToolbar } from '@angular2-material/toolbar';
import { MD_INPUT_DIRECTIVES } from '@angular2-material/input';
import { MdButton } from '@angular2-material/button';

@Component({
  moduleId: module.id,
  selector: 'qs-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
  directives: [
    MD_CARD_DIRECTIVES,
    MD_INPUT_DIRECTIVES,
    MdToolbar,
    MdIcon,
    MdButton,
  ],
})
export class LoginComponent {

  username: string;
  password: string;

  constructor(private router: Router) {}

  login(): void {
    alert('Mock log in as ' + this.username);
    this.router.navigate(['/']);
  }
}
