import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpInterceptorService } from '@covalent/http';

@Injectable()
export class UsersService {

  constructor(private _http: HttpInterceptorService) {}

  query(): any {
   return this._http.get('data/users.json')
   .map((res: Response) => {
     return res.json();
   });
  }
}
