import { DataService } from './data.service';
import { Injectable } from '@angular/core';

@Injectable()
export class InitService {

  constructor(private dataService:DataService) { }

 public getMeunList(){
    return [{path:"/home", name:"Home"},{path:"/about", name:"About"}]
  }

  

}
