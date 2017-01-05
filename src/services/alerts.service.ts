import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { HttpInterceptorService, RESTService } from '@covalent/http';
import { MOCK_API } from '../config/api.config';

export interface IAlert {
  name: string;
  item_id: string;
  description: string;
  created: Date;
  icon: string;
}

@Injectable()
export class AlertsService extends RESTService<IAlert> {

  constructor(private _http: HttpInterceptorService) {
    super(_http, {
      baseUrl: MOCK_API,
      path: '/alerts',
    }); 
  }

  staticQuery(): Observable<IAlert[]> {
    return this._http.get('data/alerts.json')
    .map((res: Response) => {
      return res.json();
    }); 
  }
}
