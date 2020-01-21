import { Component, OnInit } from '@angular/core';
import { IUser } from '@td-vantage/ui-platform';
import { VantageSessionService } from '@td-vantage/ui-platform/auth';
import { ITdLink } from '@covalent/core/nav-links';
import { VantageThemeService, VantageTheme } from '../theme.service';

@Component({
  selector: 'covalent-app',
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

  async logout(): Promise<void> {
    this.user = undefined;
    this._vantageSessionService.logout();
  }

  get logo(): string {
    return this.darkThemeIsActive ? 'teradata' : 'teradata-dark';
  }
  get darkThemeIsActive(): boolean {
    return this._themeService.darkThemeIsActive;
  }
  get lightThemeIsActive(): boolean {
    return this._themeService.lightThemeIsActive;
  }
  applyLightTheme(): void {
    this._themeService.applyLightTheme();
  }
  applyDarkTheme(): void {
    this._themeService.applyDarkTheme();
  }
}
