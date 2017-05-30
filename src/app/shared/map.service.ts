import { Injectable, Inject, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { ConfigToken, Config } from './config.service';

@Injectable()
export class MapService {

  constructor(private http: Http, @Inject(ConfigToken) private config: Config) { }

  getStreets(): Observable<Response> {
    return  this.http.get('assets/streets.json')
      .map((res: Response) => res);
  }

  getOneRoute(route, n) {
    const url = this.config.RouteConfig(route, n);
    return this.http.get(url)
      .map((result: Response) => result.json());
  }

  getAllRoutes(tags) {
    console.log(tags)
    const n = new Date().getTime() - 1000 * 10;
    return Promise.all(
      tags.map(tag => {
        return new Promise((resolve, reject) => {
          this.getOneRoute(tag, n).subscribe(result => {
            if (result.error) {
              reject(result.error);
              console.log(result.error);
            } else {
             // console.log(result)
              resolve({tag, result});
            }
          });
        });
      })
    );
  }

  getRoutes(): Observable<Response> {
    return this.http.get(this.config.RoutesUrl)
      .map((res: Response) => res.json());
  }
}
