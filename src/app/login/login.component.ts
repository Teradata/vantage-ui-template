import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TdLoadingService } from '@covalent/core';

@Component({
  moduleId: module.id,
  selector: 'qs-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
})
export class LoginComponent {

  username: string;
  password: string;

  constructor(private _router: Router,
              private _loadingService: TdLoadingService) {}

  login(): void {
    this._loadingService.register('main');
    alert('Mock log in as ' + this.username);
    setTimeout(() => {
      this._router.navigate(['/']);
      this._loadingService.resolve('main');
    }, 2000);
  }
}
