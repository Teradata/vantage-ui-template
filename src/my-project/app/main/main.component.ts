import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '@td-vantage/ui-platform';
import { VantageSessionService } from '@td-vantage/ui-platform/auth';

@Component({
  selector: 'covalent-app',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  // Current date
  year: any = new Date().getFullYear();

  // Logged in user
  user: IUser;

  // Sidenav routes
  routes: any[] = [
    {
      title: 'DASHBOARD',
      route: '/',
      icon: 'dashboard',
      show: true,
    },
  ];

  constructor(private _vantageSessionService: VantageSessionService) {}

  ngOnInit(): void {
    this.user = this._vantageSessionService.user;
  }

  async logout(): Promise<void> {
    this.user = undefined;
    await this._vantageSessionService.logout();
  }
}
