import { Component, AfterViewInit } from '@angular/core';

import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'dashboard-product',
  templateUrl: 'dashboard-product.component.html',
  styleUrls: ['dashboard-product.component.scss'],
})
export class DashboardProductComponent implements AfterViewInit {

  title: string;
  constructor(private _titleService: Title) { }

  ngAfterViewInit(): void {
    this._titleService.setTitle( 'Product Dashboard' );
    this.title = this._titleService.getTitle();
  }
}
