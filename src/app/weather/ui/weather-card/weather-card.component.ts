import {Component, OnDestroy, Input, OnChanges} from '@angular/core';
import {Router} from '@angular/router';
import {WeatherService} from '../../services/weather/weather.service';
import {UiService} from '../../services/ui/ui.service';
import {CityInputComponent} from './weatherInputForm/weatherInputForm.component';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnChanges, OnDestroy {
  
  condition: string;
  currentTemp: number;
  maxTemp: number;
  minTemp: number;
  darkMode: boolean;
  cityName:string;


  //model=new CityName("Johannesburg");
  public shows:boolean=false;
  // var localStorage: LocalStorage;
  constructor(public weather: WeatherService,
              public ui: UiService) {
  }
    submitted=false;
setViewTrue(){
  this.shows=true;
}
    onSubmit(){
        this.submitted=true;
        console.log(this.cityName);
    }
  ngOnChanges() {
    this.cityName;
    this.ui.darkModeState.subscribe((isDark) => {
      // this.darkMode = isDark;
      this.darkMode =isDark;
      
    });
      this.weather.getWeatherState(this.cityName)
        .subscribe((data: string) => {
          // this.condition = data;
          this.condition=data;
        });
  
      this.weather.getCurrentTemp(this.cityName).subscribe((data: number) => {
        // this.currentTemp = data;
        this.currentTemp=data;
      });
      this.weather.getMinTemp(this.cityName).subscribe((data: number) => {
        // this.minTemp = data;
        this.minTemp=data;
      });
      this.weather.getMaxTemp(this.cityName).subscribe((data: number) => {
        // this.maxTemp = data;
        this.maxTemp=data;
      });

  }
  ngOnDestroy() {

  }
  openDetails() {
   // this.router.navigateByUrl('/details/'+this.cityName);
  }
  

}
