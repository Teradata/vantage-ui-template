import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { ItemsService } from '../../services';

@Component({
  moduleId: module.id,
  selector: 'qs-detail',
  templateUrl: 'detail.component.html',
  styleUrls: ['detail.component.css'],
  viewProviders: [ ItemsService ],
})
export class DetailComponent implements OnInit {

  item: Object = {};

  constructor(private _router: Router, private _itemsService: ItemsService, private _route: ActivatedRoute) {}

  goBack(): void {
    this._router.navigate(['/dashboard']);
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: {id: string}) => {
      let itemId: string = params.id;
      this._itemsService.get(itemId).subscribe((item: Object) => {
        this.item = item;
      });
    });
  }
}
