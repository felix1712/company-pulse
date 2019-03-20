import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {AppSettings} from '../app.component';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ResultsService {

  constructor(private http:Http) { }

  getGenre(){
    return this.http.get(AppSettings.API_URL+'/genres')
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
  }
}
