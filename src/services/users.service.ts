import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import { HttpInterceptorService } from '@covalent/http';

export interface IUser {
  display_name: string;
  id: string;
  email: string;
  created: Date;
  last_access: Date;
  site_admin: number;
}

@Injectable()
export class UsersService {

  private staticApiData: string = 'data/users.json';
  private mockApiData: string = 'http://localhost:8080/users';

  constructor(private _http: HttpInterceptorService) {}

  staticQuery(): any {
    return this._http.get(this.staticApiData)
    .map((res: Response) => {
      return res.json();
    });
  }

  query(): any {
    return this._http.get(this.mockApiData)
    .map((res: Response) => {
      return res.json();
    });
  }

  add(user: IUser): any {
    let body = JSON.stringify(user);
    let headers: any = new Headers({ 'Content-Type': 'application/json' });
    let options: any = new RequestOptions({ headers: headers });
    return this._http.post(this.mockApiData, body, options)
    .map((res: Response) => {
      return res.json();
    });
  }
}
