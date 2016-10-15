import { Component, OnInit } from '@angular/core';

import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'dashboard-product',
  templateUrl: 'dashboard-product.component.html',
  styleUrls: ['dashboard-product.component.scss'],
})
export class DashboardProductComponent implements OnInit {

  title: string;
  constructor(private _titleService: Title) { }

  ngOnInit(): void {
    this.title = this._titleService.getTitle();
  }
}
