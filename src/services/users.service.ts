import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { HttpInterceptorService, RESTService } from '@covalent/http';

export interface IUser {
  display_name: string;
  id: string;
  email: string;
  created: Date;
  last_access: Date;
  site_admin: number;
}

@Injectable()
export class UsersService extends RESTService<IUser> {

  constructor(private _http: HttpInterceptorService) {
    super(_http, {
      baseUrl: 'http://localhost:8080',
      path: '/users',
    });
  }

  staticQuery(): Observable<IUser[]> {
    return this._http.get('data/users.json')
    .map((res: Response) => {
      return res.json();
    });
  }
}
