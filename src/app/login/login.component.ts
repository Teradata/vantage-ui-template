import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'qs-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
})
export class LoginComponent {

  username: string;
  password: string;

  constructor(private _router: Router) {}

  login(): void {
    alert('Mock log in as ' + this.username);
    this._router.navigate(['/']);
  }
}
