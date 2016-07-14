import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ItemsService {

  constructor(private http: Http) {}

  query(): any {
   return this.http.get('data/items.json')
   .map((res: Response) => {
     return res.json();
   });
  }

  get(id: string): any {
   return this.http.get('data/items.json')
   .map((res: Response) => {
     let item: any;
     res.json().forEach((s: any) => {
       if (s.item_id === id) {
         item = s;
       }
     });
     return item;
   });
  }
}
