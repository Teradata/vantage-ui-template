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

  constructor(private usersService: UsersService, private route: ActivatedRoute) {}
  display_name: string;
  email: string;
  admin: string;
  

  goBack(){
    window.history.back();
  }

  ngOnInit(): void {
  }

  save() {
    let site_admin: number = 0;
    if (this.admin) {
      site_admin = 1;
    }
    let now: Date = new Date();
    let newUser: IUser = {
      display_name: this.display_name,
      email: this.email,
      site_admin: site_admin,
      id: this.display_name.replace(/\s+/g, '.'),
      created: now,
      last_access: now,  
    }
    this.usersService.add(newUser).subscribe();
    this.goBack();
  }

}
