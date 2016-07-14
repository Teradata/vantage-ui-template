import { Component, OnInit } from '@angular/core';

import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MdIcon } from '@angular2-material/icon';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { TD_LAYOUT_DIRECTIVES } from '@covalent/core';

import { UsersService } from '../../services';

@Component({
  moduleId: module.id,
  selector: 'qs-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.css'],
  directives: [
    MD_LIST_DIRECTIVES,
    ROUTER_DIRECTIVES,
    MdIcon,
    TD_LAYOUT_DIRECTIVES,
    MD_CARD_DIRECTIVES,
  ],
  viewProviders: [ UsersService ],
})
export class UsersComponent implements OnInit {

  users: Object[];

  constructor(private router: Router, private usersService: UsersService) {}

  goBack(route: string): void {
    this.router.navigate(['/']);
  }

  userClick(id: string): void {
    alert('clicked on user: ' + id);
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.usersService.query().subscribe((users: Object[]) => {
      this.users = users;
    });
  }
}
