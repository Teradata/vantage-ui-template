import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { MdIcon } from '@angular2-material/icon';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';

import { TD_LAYOUT_DIRECTIVES } from '@covalent/core';

@Component({
  moduleId: module.id,
  selector: 'qs-main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
    MdIcon,
    MD_LIST_DIRECTIVES,
    TD_LAYOUT_DIRECTIVES,
  ],
})
export class MainComponent {

  routes: Object[] = [{
      title: 'Home',
      route: '/',
      icon: 'home',
    }, {
      title: 'Activity Dashboard',
      route: '/dashboard',
      icon: 'list',
    }, {
      title: 'Manage Users',
      route: '/users',
      icon: 'people',
    },
  ];

  constructor(private router: Router) {}

  logout(): void {
    this.router.navigate(['/login']);
  }
}
