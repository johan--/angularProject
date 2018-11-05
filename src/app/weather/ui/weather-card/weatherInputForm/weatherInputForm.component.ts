import {Component, Input} from '@angular/core';
@Component({
  selector: 'app-weatherInputForm',
  templateUrl: './weatherInputForm.component.html'
})
export class CityInputComponent{
    
    //model=new CityName("Johannesburg");
    // @Input() cityName:string;
    @Input() cityName:string;
    // cities=[];
    constructor(){    }
    addCityName(){
        // this.cities.push(this.cityName);
        // console.log(this.cityName);
    }
}