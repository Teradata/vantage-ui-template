import { Component, AfterViewInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';

import { TdLoadingService, TdMediaService } from '@covalent/core';

import { ItemsService, UsersService, ProductsService } from '../../services';

@Component({
  selector: 'qs-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss'],
  viewProviders: [ ItemsService, UsersService, ProductsService ],
})
export class LogsComponent implements AfterViewInit {

  items: Object[];
  users: Object[];
  products: Object[];

  constructor(private _titleService: Title,
              private _itemsService: ItemsService,
              private _usersService: UsersService,
              private _productsService: ProductsService,
              private _loadingService: TdLoadingService,
              public media: TdMediaService) {

  }

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    this.media.broadcast();

    this._titleService.setTitle( 'Covalent Logs' );

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
    this._loadingService.register('products.load');
    this._productsService.query().subscribe((products: Object[]) => {
      this.products = products;
      setTimeout(() => {
        this._loadingService.resolve('products.load');
      }, 2000);
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
