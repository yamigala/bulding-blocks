import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-home-details',
  templateUrl: './home-details.component.html',
  styleUrls: ['./home-details.component.css']
})
export class HomeDetailsComponent implements OnInit {

  constructor() { }
  @Input() public homes;
  @Output() public saveclicked = new EventEmitter();

  ngOnInit() {
  }
public onSaveClick(saved:any) {
  this.saveclicked.emit(saved);
  console.log("event emitted");
  
}
}
