import { Component, OnInit } from '@angular/core';
import { VantageThemeService } from '@td-vantage/ui-platform/theme';
import { IUser } from '@td-vantage/ui-platform/user';

import { VantageSessionService } from '@td-vantage/ui-platform/auth';
import { ITdLink } from '@covalent/core/nav-links';

@Component({
  selector: 'td-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  // Logged in user
  user: IUser;

  // Sidenav routes
  links: ITdLink[] = [
    {
      label: 'Dashboard',
      link: {
        routerLink: '/',
      },
      icon: {
        name: 'dashboard',
      },
      show: true,
    },
  ];

  constructor(private _vantageSessionService: VantageSessionService, public _themeService: VantageThemeService) {}

  ngOnInit(): void {
    this.user = this._vantageSessionService.user;
  }

  logout(): void {
    this.user = undefined;
    this._vantageSessionService.logout();
  }
}
