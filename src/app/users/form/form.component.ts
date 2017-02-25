import { Component, OnInit, AfterViewInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { TdMediaService } from '@covalent/core';

import { UsersService, IUser } from '../../../services';

@Component({
  selector: 'qs-user-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  viewProviders: [ UsersService ],
})
export class UsersFormComponent implements OnInit, AfterViewInit {

  displayName: string;
  email: string;
  id: string;
  admin: boolean;
  user: IUser;
  action: string;

  constructor(private _usersService: UsersService,
              private _route: ActivatedRoute,
              public media: TdMediaService) {}

  goBack(): void {
    window.history.back();
  }

  ngAfterViewInit(): void {
    // broadcast to all listener observables when loading the page
    this.media.broadcast();
  }

  ngOnInit(): void {
    this._route.url.subscribe((url: any) => {
      this.action = (url.length > 1 ? url[1].path : 'add');
    });
    this._route.params.subscribe((params: {id: string}) => {
      let userId: string = params.id;
      this._usersService.get(userId).subscribe((user: any) => {
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
      this._usersService.create(this.user).subscribe(() => {
        this.goBack();
      });
    } else {
      this._usersService.update(this.id, this.user).subscribe(() => {
        this.goBack();
      });
    }
  }
}
