import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'qs-main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.css'],
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
