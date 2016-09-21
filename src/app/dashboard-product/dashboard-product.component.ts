import { Component, AfterViewInit } from '@angular/core';

import { TdLoadingService } from '@covalent/core';

import { ItemsService, UsersService } from '../../services';

@Component({
  selector: 'dashboard-product',
  templateUrl: 'dashboard-product.component.html',
  styleUrls: ['dashboard-product.component.scss'],
  viewProviders: [ ItemsService, UsersService ],
})
export class DashboardProductComponent implements AfterViewInit {

  items: Object[];
  users: Object[];

  constructor(private _itemsService: ItemsService,
              private _usersService: UsersService,
              private _loadingService: TdLoadingService) {

  }

  ngAfterViewInit(): void {
    this._loadingService.register('items.load');
    this._itemsService.query().subscribe((items: Object[]) => {
      this.items = items;
      setTimeout(() => {
        this._loadingService.resolve('items.load');
      }, 2000);
    }, (error: Error) => {
      this._itemsService.staticQuery().subscribe((items: Object[]) => {
        this.items = items;
        setTimeout(() => {
          this._loadingService.resolve('items.load');
        }, 2000);
      });
    });
    this._loadingService.register('users.load');
    this._usersService.query().subscribe((users: Object[]) => {
      this.users = users;
      setTimeout(() => {
        this._loadingService.resolve('users.load');
      }, 2000);
    }, (error: Error) => {
      this._usersService.staticQuery().subscribe((users: Object[]) => {
        this.users = users;
        setTimeout(() => {
          this._loadingService.resolve('users.load');
        }, 2000);
      });
    });
  }
}
