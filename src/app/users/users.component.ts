import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { TdLoadingService } from '@covalent/core';

import { UsersService, IUser } from '../../services';

@Component({
  moduleId: module.id,
  selector: 'qs-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.css'],
  viewProviders: [ UsersService ],
})
export class UsersComponent implements AfterViewInit {

  users: IUser[];

  constructor(private _router: Router,
              private _loadingService: TdLoadingService,
              private _usersService: UsersService) {}

  goBack(route: string): void {
    this._router.navigate(['/']);
  }

  ngAfterViewInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this._loadingService.register('users.list');
    this._usersService.query().subscribe((users: IUser[]) => {
      this.users = users;
      this._loadingService.resolve('users.list');
    }, (error: Error) => {
      this._usersService.staticQuery().subscribe((users: IUser[]) => {
        this.users = users;
        this._loadingService.resolve('users.list');
      });
    });
  }

  deleteUser(id: string): void {
    this._loadingService.register('users.list');
    this._usersService.delete(id).subscribe(() => {
      this.users = this.users.filter((user: IUser) => {
        return user.id !== id;
      });
      this._loadingService.resolve('users.list');
    }, (error: Error) => {
      this._loadingService.resolve('users.list');
    });
  }

}
