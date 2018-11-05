import {Component, OnChanges,Input} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnChanges {
@Input() cityName:string;
// cityName:string="Johannesburg";
  constructor() {
  }

  ngOnChanges() {

  }
}
