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

  constructor(private itemsService: ItemsService, private usersService: UsersService) {}

  ngOnInit(): void {
    this.usersService.query().subscribe((users: Object[]) => {
      this.users = users;
    }, (error: Error) => {
      this.usersService.staticQuery().subscribe((users:Object[]) => {
        this.users = users
      }); 
    }); 

    this.itemsService.query().subscribe((items: Object[]) => {
      this.items = items;
    }, (error: Error) => {
      this.itemsService.staticQuery().subscribe((items:Object[]) => {
        this.items = items; 
      }); 
    }); 
  }
}
