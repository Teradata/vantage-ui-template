import { Component, AfterViewInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';

import { TdLoadingService } from '@covalent/core';

import { ActivitiesService, UsersService } from '../../../services';

@Component({
  selector: 'product-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  viewProviders: [ ActivitiesService, UsersService ],
})
export class ProductOverviewComponent implements AfterViewInit {

  activities: Object[];
  users: Object[];

  jsonData: any = [
    {'x': 'Ingest', 'y': 69},
    {'x': 'Monitoring', 'y': 47},
    {'x': 'Containers', 'y': 63},
    {'x': 'Compute', 'y': 82},
    {'x': 'Data Lake', 'y': 52},
    {'x': 'Alerting', 'y': 89}];

  constructor(private _titleService: Title,
              private _activitiesService: ActivitiesService,
              private _usersService: UsersService,
              private _loadingService: TdLoadingService) {

  }

  ngAfterViewInit(): void {
    this._titleService.setTitle( 'Product Name' );

    this._loadingService.register('activities.load');
    this._activitiesService.query().subscribe((activities: Object[]) => {
      this.activities = activities;
      setTimeout(() => {
        this._loadingService.resolve('activities.load');
      }, 2000);
    }, (error: Error) => {
      this._activitiesService.staticQuery().subscribe((activities: Object[]) => {
        this.activities = activities;
        setTimeout(() => {
          this._loadingService.resolve('activities.load');
        }, 2000);
      });
    });
    this._loadingService.register('users.load');
    this._usersService.query().subscribe((users: Object[]) => {
      this.users = users;
      setTimeout(() => {
        this._loadingService.resolve('users.load');
      }, 2000);
    }, (error: Error) => {
      this._usersService.staticQuery().subscribe((users: Object[]) => {
        this.users = users;
        setTimeout(() => {
          this._loadingService.resolve('users.load');
        }, 2000);
      });
    });
  }

}
