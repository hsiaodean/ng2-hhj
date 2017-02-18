import { InitService } from './sys/service/init.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  menuList:any[];

  constructor(private initService:InitService){
    
  }

  ngOnInit(){
    this.menuList = this.initService.getMeunList()
  }
}
