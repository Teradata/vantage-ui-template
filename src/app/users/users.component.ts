import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { TdLoadingService } from '@covalent/core';

import { UsersService, IUser } from '../../services';

@Component({
  selector: 'qs-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.scss'],
  viewProviders: [ UsersService ],
})
export class UsersComponent implements AfterViewInit {

  users: IUser[];
  filteredUsers: IUser[];

  constructor(private _router: Router,
              private _loadingService: TdLoadingService,
              private _usersService: UsersService) {}

  goBack(route: string): void {
    this._router.navigate(['/']);
  }

  ngAfterViewInit(): void {
    this.loadUsers();
  }

  filterUsers(displayName: string = ''): void {
    this.filteredUsers = this.users.filter((user: IUser) => {
      return user.display_name.toLowerCase().indexOf(displayName.toLowerCase()) > -1;
    });
  }

  loadUsers(): void {
    this._loadingService.register('users.list');
    this._usersService.query().subscribe((users: IUser[]) => {
      this.users = users;
      this.filteredUsers = users;
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
      this.filteredUsers = this.filteredUsers.filter((user: IUser) => {
        return user.id !== id;
      });
      this._loadingService.resolve('users.list');
    }, (error: Error) => {
      this._loadingService.resolve('users.list');
    });
  }

}
