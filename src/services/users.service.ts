import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class UsersService {

  constructor(private http: Http) {}

  query(): any {
   return this.http.get('data/users.json')
   .map((res: Response) => {
     return res.json();
   });
  }
}
