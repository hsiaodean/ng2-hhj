import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  

  @Input()
  menuList:any[];

  isOpen:boolean = false;

  constructor() { }

  ngOnInit() {}

  
  toggleMenu(){
    this.isOpen =!this.isOpen;
  }

}
