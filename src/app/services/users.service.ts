import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { HttpInterceptorService, RESTService } from '@covalent/http';
import { environment } from '../../environments/environment';

export interface IUser {
  displayName: string;
  id: string;
  email: string;
  created: Date;
  lastAccess: Date;
  siteAdmin: number;
}

@Injectable()
export class UsersService extends RESTService<IUser> {

  constructor(private _http: HttpInterceptorService) {
    super(_http, {
      baseUrl: environment.rootApi,
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
