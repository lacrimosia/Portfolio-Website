import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private _http: Http) { }

  getData() {
  	 return this._http.get('assets/data.json')
  	       .map((res:Response) => res.json());
  }


}
