import { Component, AfterViewInit, ChangeDetectorRef, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';

import { TdMediaService } from '@covalent/core';

@Component({
  selector: 'qs-dashboard-product',
  templateUrl: './dashboard-product.component.html',
  styleUrls: ['./dashboard-product.component.scss'],
})
export class DashboardProductComponent implements AfterViewInit, OnInit {

  title: string;
  constructor(private _titleService: Title,
              private _changeDetectorRef: ChangeDetectorRef,
              public media: TdMediaService) { }

  ngOnInit(): void {
    this._titleService.setTitle( 'Product Dashboard' );
    this.title = this._titleService.getTitle();
  }

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    Promise.resolve(undefined).then(() => {
      this.media.broadcast();
      this._changeDetectorRef.markForCheck();
    });
  }
}
