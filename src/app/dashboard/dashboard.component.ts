import { Component, AfterViewInit } from '@angular/core';

import { TdLoadingService } from '@covalent/core';

import { ItemsService, UsersService } from '../../services';

@Component({
  moduleId: module.id,
  selector: 'qs-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  viewProviders: [ ItemsService, UsersService ],
})
export class DashboardComponent implements AfterViewInit {

  items: Object[];
  users: Object[];

  constructor(private _itemsService: ItemsService,
              private _userService: UsersService,
              private _loadingService: TdLoadingService) {

  }

  ngAfterViewInit(): void {
    this._loadingService.register('items.load');
    this._itemsService.query().subscribe((items: Object[]) => {
      this.items = items;
      setTimeout(() => {
        this._loadingService.resolve('items.load');
      }, 2000);
    });
    this._loadingService.register('users.load');
    this._userService.query().subscribe((users: Object[]) => {
      this.users = users;
      setTimeout(() => {
        this._loadingService.resolve('users.load');
      }, 2000);
    });
  }
}
