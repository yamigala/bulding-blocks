import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public data=[];
  constructor() {
    this.data=['yamini','sonal','akshita','tina'];
   }

  ngOnInit() {
  }
onSaveClick(){
  console.log("log on parent");
  
}
}
