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

  get(id: string): any {
    return this._http.get(this.mockApiData)
    .map((res: Response) => {
      let user: any;
      res.json().forEach((s: any) => {
        if (s.id === id) {
          user = s;
        }
      });
      return user;
    });
  }

  update(user: IUser, action: string): any {
    let body = JSON.stringify(user);
    if (action == "add") {
      return this._http.post(this.mockApiData, body)
      .map((res: Response) => {
        return res.json();
      });
    };
    if (action == "edit") {
      return this._http.put(this.mockApiData + "/" + user.id, body)
      .map((res: Response) => {
        return res.json();
      });
    };
  }

  deleteUser(id: string): any {
    return this._http.delete(this.mockApiData + "/" + id)
    .map((res: Response) => {
      return res.json();
    });
  }
}
