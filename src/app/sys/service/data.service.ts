import { Injectable } from '@angular/core';
import{Http, RequestOptions} from '@angular/http';
import {Subject} from 'rxjs'

@Injectable()
export class DataService {

  constructor(private http:Http) {}

  get(url:string, options:RequestOptions){
    let subject = new Subject();
    return this.http.get(url, options).subscribe(subject);
  }

  

  

}
