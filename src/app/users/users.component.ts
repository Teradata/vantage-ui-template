import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UsersService } from '../../services';

@Component({
  moduleId: module.id,
  selector: 'qs-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.css'],
  viewProviders: [ UsersService ],
})
export class UsersComponent implements OnInit {

  users: Object[];

  constructor(private _router: Router, private _usersService: UsersService) {}

  goBack(route: string): void {
    this._router.navigate(['/']);
  }

  loadUsers(): void {
    this._usersService.query().subscribe((users: Object[]) => {
      this.users = users;
    }, (error: Error) => {
      this._usersService.staticQuery().subscribe((users: Object[]) => {
        this.users = users;
      });
    });
  }

  deleteUser(id: string): void {
    this._usersService.deleteUser(id).subscribe();
    this.loadUsers();
  }

  ngOnInit(): void {
    this.loadUsers();
  }

}
