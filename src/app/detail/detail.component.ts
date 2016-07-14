import { Component, OnInit } from '@angular/core';

import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { MdIcon } from '@angular2-material/icon';
import { Router, ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

import { TD_LAYOUT_DIRECTIVES } from '@covalent/core';

import { ItemsService } from '../../services';

@Component({
  moduleId: module.id,
  selector: 'qs-detail',
  templateUrl: 'detail.component.html',
  styleUrls: ['detail.component.css'],
  directives: [
    MD_LIST_DIRECTIVES,
    ROUTER_DIRECTIVES,
    MdIcon,
    TD_LAYOUT_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
  ],
  viewProviders: [ ItemsService ],
})
export class DetailComponent implements OnInit {

  item: Object = {};

  constructor(private router: Router, private itemsService: ItemsService, private route: ActivatedRoute) {}

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: {id: string}) => {
      let itemId: string = params.id;
      this.itemsService.get(itemId).subscribe((item: Object) => {
        this.item = item;
      });
    });
  }
}
