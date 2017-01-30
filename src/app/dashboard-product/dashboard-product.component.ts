import { Component, AfterViewInit } from '@angular/core';

import { Title } from '@angular/platform-browser';

import { TdMediaService } from '@covalent/core';

@Component({
  selector: 'qs-dashboard-product',
  templateUrl: './dashboard-product.component.html',
  styleUrls: ['./dashboard-product.component.scss'],
})
export class DashboardProductComponent implements AfterViewInit {

  title: string;
  constructor(private _titleService: Title,
              public media: TdMediaService) { }

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    this.media.broadcast();

    this._titleService.setTitle( 'Product Dashboard' );
    this.title = this._titleService.getTitle();
  }
}
