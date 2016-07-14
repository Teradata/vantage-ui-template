import { Component, OnInit } from '@angular/core';

import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MdIcon } from '@angular2-material/icon';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

import { TD_LAYOUT_DIRECTIVES, TdTimeAgoPipe } from '@covalent/core';

import { ItemsService, UsersService } from '../../services';

@Component({
  moduleId: module.id,
  selector: 'qs-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives: [
    MD_LIST_DIRECTIVES,
    ROUTER_DIRECTIVES,
    MdIcon,
    TD_LAYOUT_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
  ],
  viewProviders: [ ItemsService, UsersService ],
  pipes: [ TdTimeAgoPipe ],
})
export class DashboardComponent implements OnInit {

  items: Object[];
  users: Object[];

  constructor(private itemsService: ItemsService, private userService: UsersService) {}

  ngOnInit(): void {
    this.itemsService.query().subscribe((items: Object[]) => {
      this.items = items;
    });
    this.userService.query().subscribe((users: Object[]) => {
      this.users = users;
    });
  }
}
