import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { UsersService, IUser } from '../../../services';

@Component({
  moduleId: module.id,
  selector: 'source-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.css'],
  viewProviders: [ UsersService ],
})
export class UsersFormComponent implements OnInit  {

  constructor(private _usersService: UsersService, private _route: ActivatedRoute) {}
  display_name: string;
  email: string;
  admin: boolean;
  user: IUser;
  action: string;

  goBack(){
    window.history.back();
  }

  ngOnInit(): void {
    this._route.url.subscribe(url => {
      this.action = (url.length > 1 ? url[1].path : "add");
    });
    this._route.params.subscribe((params: {id: string}) => {
      let userId: string = params.id;
        console.log(userId);
      this._usersService.get(userId).subscribe((user: any) => {
        this.display_name = user.display_name;
        this.email = user.email;
        this.admin = (user.site_admin == 1 ? true : false);
        console.log(this.display_name);
      });
    });
  }

  save(): void {
    let site_admin: number = (this.admin ? 1 : 0);
    let now: Date = new Date();
    this.user = {
      display_name: this.display_name,
      email: this.email,
      site_admin: site_admin,
      id: this.display_name.replace(/\s+/g, '.'),
      created: now,
      last_access: now,  
    }
    this._usersService.update(this.user, this.action).subscribe();
    this.goBack();
  }

  deleteUser(id: string): void {
    this._usersService.deleteUser(id).subscribe();
    this.goBack();
  }
}
