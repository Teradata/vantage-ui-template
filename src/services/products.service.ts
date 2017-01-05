import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { HttpInterceptorService, RESTService } from '@covalent/http';
import { MOCK_API } from '../config/api.config';

export interface IProduct {
  name: string;
  item_id: string;
  description: string;
  icon: string;
  color: string;
  category: string;
}

@Injectable()
export class ProductsService extends RESTService<IProduct> {

  constructor(private _http: HttpInterceptorService) {
    super(_http, {
      baseUrl: MOCK_API,
      path: '/products',
    }); 
  }

  staticQuery(): Observable<IProduct[]> {
    return this._http.get('data/products.json')
    .map((res: Response) => {
      return res.json();
    }); 
  }
}
