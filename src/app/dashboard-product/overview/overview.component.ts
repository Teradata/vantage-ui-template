import { Component, AfterViewInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';

import { TdLoadingService } from '@covalent/core';

import { ItemsService, UsersService } from '../../../services';

@Component({
  selector: 'product-overview',
  templateUrl: 'overview.component.html',
  styleUrls: ['overview.component.scss'],
  viewProviders: [ ItemsService, UsersService ],
})
export class ProductOverviewComponent implements AfterViewInit {

  items: Object[];
  users: Object[];

  jsonData: any = [
    {'x': 'Ingest', 'y': 69},
    {'x': 'Monitoring', 'y': 47},
    {'x': 'Containers', 'y': 63},
    {'x': 'Compute', 'y': 82},
    {'x': 'Data Lake', 'y': 52},
    {'x': 'Alerting', 'y': 89}];

  constructor(private _titleService: Title,
              private _itemsService: ItemsService,
              private _usersService: UsersService,
              private _loadingService: TdLoadingService) {

  }

  ngAfterViewInit(): void {
    this._titleService.setTitle( 'Product Name' );

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
