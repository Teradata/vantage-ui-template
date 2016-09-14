import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpInterceptorService } from '@covalent/http';

@Injectable()
export class UsersService {

  private staticApiData: string = 'data/users.json';
  private mockApiData: string = 'http://localhost:8080/users';

  constructor(private _http: HttpInterceptorService) {}

  staticQuery(): any {
    return this.http.get(this.staticApiData)
    .map((res: Response) => {
      return res.json();
    });
  }

  query(): any {
    return this.http.get(this.mockApiData)
    .map((res: Response) => {
      return res.json();
    });
  }
}
