import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MdSnackBar } from '@angular/material';

import { TdLoadingService, TdDialogService, TdMediaService } from '@covalent/core';

import { UsersService, IUser } from '../../services';

@Component({
  selector: 'qs-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  viewProviders: [ UsersService ],
})
export class UsersComponent implements AfterViewInit {

  users: IUser[];
  filteredUsers: IUser[];

  constructor(private _titleService: Title,
              private _router: Router,
              private _loadingService: TdLoadingService,
              private _dialogService: TdDialogService,
              private _snackBarService: MdSnackBar,
              private _usersService: UsersService,
              public media: TdMediaService) {
  }

  goBack(route: string): void {
    this._router.navigate(['/']);
  }

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    this.media.broadcast();

    this._titleService.setTitle( 'Covalent Users' );
    this.loadUsers();
  }

  filterUsers(displayName: string = ''): void {
    this.filteredUsers = this.users.filter((user: IUser) => {
      return user.displayName.toLowerCase().indexOf(displayName.toLowerCase()) > -1;
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
        this.filteredUsers = users;
        this._loadingService.resolve('users.list');
      });
    });
  }

  deleteUser(id: string): void {
    this._dialogService
      .openConfirm({message: 'Are you sure you want to delete this user?'})
      .afterClosed().subscribe((confirm: boolean) => {
        if (confirm) {
          this._loadingService.register('users.list');
          this._usersService.delete(id).subscribe(() => {
            this.users = this.users.filter((user: IUser) => {
              return user.id !== id;
            });
            this.filteredUsers = this.filteredUsers.filter((user: IUser) => {
              return user.id !== id;
            });
            this._loadingService.resolve('users.list');
            this._snackBarService.open('User deleted', 'Ok');
          }, (error: Error) => {
            this._dialogService.openAlert({message: 'There was an error'});
            this._loadingService.resolve('users.list');
          });
        }
      });
  }

}
