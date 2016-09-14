import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class UsersService {

  private staticApiData: string = 'data/users.json';
  private mockApiData: string = 'http://localhost:8080/users';

  constructor(private http: Http) {}

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
