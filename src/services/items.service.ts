import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ItemsService {

  private staticData: string = 'data/items.json';
  private mockApiData: string = 'http://localhost:8080/items';

  constructor(private http: Http) {}

  staticQuery(): any {
    return this.http.get(this.staticData)
    .map((res: Response) => {
      return res.json();
    });
  }

  staticGet(id: string): any {
    return this.http.get(this.staticData)
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

  query(): any {
    return this.http.get(this.mockApiData)
    .map((res: Response) => {
      return res.json();
    });
  }

  get(id: string): any {
    return this.http.get(this.mockApiData)
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
