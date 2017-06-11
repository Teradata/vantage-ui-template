import { Component, AfterViewInit, OnInit, ChangeDetectorRef } from '@angular/core';
import { Title }     from '@angular/platform-browser';

import { TdLoadingService, TdMediaService } from '@covalent/core';

import { ItemsService, ProductsService } from '../../services';

@Component({
  selector: 'qs-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss'],
  viewProviders: [ ItemsService, ProductsService ],
})
export class LogsComponent implements AfterViewInit, OnInit {

  items: Object[];
  products: Object[];

  constructor(private _titleService: Title,
              private _itemsService: ItemsService,
              private _productsService: ProductsService,
              private _loadingService: TdLoadingService,
              private _changeDetectorRef: ChangeDetectorRef,
              public media: TdMediaService) {

  }

  ngOnInit(): void {
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
  }

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    this.media.broadcast();
    // force a new change detection cycle since change detections
    // have finished when `ngAfterViewInit` is executed
    this._changeDetectorRef.detectChanges();
  }

}
