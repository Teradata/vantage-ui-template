import { Component, OnInit } from '@angular/core';

import { ItemsService, UsersService } from '../../services';

@Component({
  moduleId: module.id,
  selector: 'qs-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  viewProviders: [ ItemsService, UsersService ],
})
export class DashboardComponent implements OnInit {

  items: Object[];
  users: Object[];

  constructor(private itemsService: ItemsService, private userService: UsersService) {}

  ngOnInit(): void {
    this.itemsService.query().subscribe((items: Object[]) => {
      this.items = items;
    });
    this.userService.query().subscribe((users: Object[]) => {
      this.users = users;
    });
  }
}
