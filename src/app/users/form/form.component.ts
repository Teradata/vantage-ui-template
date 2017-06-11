import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { TdMediaService } from '@covalent/core';

import { UserService, IUser } from '../services/user.service';

@Component({
  selector: 'qs-user-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class UsersFormComponent implements OnInit, AfterViewInit {

  displayName: string;
  email: string;
  id: string;
  admin: boolean;
  user: IUser;
  action: string;

  constructor(private _userService: UserService,
              private _route: ActivatedRoute,
              private _changeDetectorRef: ChangeDetectorRef,
              public media: TdMediaService) {}

  goBack(): void {
    window.history.back();
  }

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    this.media.broadcast();
    // force a new change detection cycle since change detections
    // have finished when `ngAfterViewInit` is executed
    this._changeDetectorRef.detectChanges();
  }

  ngOnInit(): void {
    this._route.url.subscribe((url: any) => {
      this.action = (url.length > 1 ? url[1].path : 'add');
    });
    this._route.params.subscribe((params: {id: string}) => {
      let userId: string = params.id;
      this._userService.get(userId).subscribe((user: any) => {
        this.displayName = user.displayName;
        this.email = user.email;
        this.admin = (user.siteAdmin === 1 ? true : false);
        this.id = user.id;
      });
    });
  }

  save(): void {
    let siteAdmin: number = (this.admin ? 1 : 0);
    let now: Date = new Date();
    this.user = {
      displayName: this.displayName,
      email: this.email,
      siteAdmin: siteAdmin,
      id: this.id || this.displayName.replace(/\s+/g, '.'),
      created: now,
      lastAccess: now,
    };
    if (this.action === 'add') {
      this._userService.create(this.user).subscribe(() => {
        this.goBack();
      });
    } else {
      this._userService.update(this.id, this.user).subscribe(() => {
        this.goBack();
      });
    }
  }
}
