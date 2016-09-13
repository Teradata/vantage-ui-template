import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpInterceptorService } from '@covalent/http';

@Injectable()
export class UsersService {

  constructor(private http: HttpInterceptorService) {}

  query(): any {
   return this.http.get('data/users.json')
   .map((res: Response) => {
     return res.json();
   });
  }
}
