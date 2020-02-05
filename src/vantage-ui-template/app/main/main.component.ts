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

  constructor(private _vantageSessionService: VantageSessionService, private _themeService: VantageThemeService) {}

  ngOnInit(): void {
    this.user = this._vantageSessionService.user;
  }

  logout(): void {
    this.user = undefined;
    this._vantageSessionService.logout();
  }

  get logo(): string {
    return this.lightThemeIsActive ? 'teradata-dark' : 'teradata';
  }
  get lightThemeIsActive(): boolean {
    return this._themeService.lightThemeIsActive;
  }
  toggleTheme(): void {
    this._themeService.toggleTheme();
  }
}
