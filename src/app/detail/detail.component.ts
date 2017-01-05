import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { ActivitiesService } from '../../services';

@Component({
  selector: 'qs-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  viewProviders: [ ActivitiesService ],
})
export class DetailComponent implements OnInit {

  activity: Object = {};

  constructor(private _router: Router, private _activitiesService: ActivitiesService, private _route: ActivatedRoute) {}

  goBack(): void {
    this._router.navigate(['/dashboard-product']);
  }

  ngOnInit(): void {
    this._route.params.subscribe((params: {id: string}) => {
      let activityId: string = params.id;
      this._activitiesService.get(activityId).subscribe((activity: Object) => {
        this.activity = activity;
      }, (error: Error) => {
        this._activitiesService.staticGet(activityId).subscribe((activity: Object) => {
          this.activity = activity;
        });
      });
    });
  }
}
