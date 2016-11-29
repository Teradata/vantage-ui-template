import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { HttpInterceptorService, RESTService } from '@covalent/http';
import { MOCK_API } from '../config/api.config';

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
      baseUrl: MOCK_API,
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
