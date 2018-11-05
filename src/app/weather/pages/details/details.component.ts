import {Component,Input, OnChanges, OnInit,HostListener} from '@angular/core';
// import {ActivatedRoute} from '@angular/router';
import {WeatherService} from '../../services/weather/weather.service';
import {MapSearchComponent} from '../../../mapsearch/mapsearch.component';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnChanges {
  // @Input() mapSearch: MapSearchComponent;
  @Input() cityName:string;
  state: string;
  temp: number;
  hum: number;
  wind: number;

  today: string;

  day1Name: string;
  day1State: string;
  day1Temp: number;


  day2Name: string;
  day2State: string;
  day2Temp: number;

  day3Name: string;
  day3State: string;
  day3Temp: number;

  day4Name: string;
  day4State: string;
  day4Temp: number;

  day5Name: string;
  day5State: string;
  day5Temp: number;

  constructor(public weather: WeatherService) {
  }

  ngOnChanges() {
// this.mapSearch.currentMessage.subscribe(cityName => this.cityName=cityName)

    const todayNumberInWeek = new Date().getDay();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    this.today = days[todayNumberInWeek];
    console.log(this.cityName+" is the name of the city in detailsComponent")
    // this.activeRouter.paramMap.subscribe((route: any) => {
      this.weather.getWeatherState(this.cityName).subscribe((state) => this.state = state);
      this.weather.getCurrentTemp(this.cityName).subscribe((temperature) => this.temp = temperature);
      this.weather.getCurrentHum(this.cityName).subscribe((humidity) => this.hum = humidity);
      this.weather.getCurrentWind(this.cityName).subscribe((windspeed) => this.wind = windspeed);
      this.weather.getForecast(this.cityName).subscribe((data: any) => {
        console.log(data);
        for (let i = 0; i < data.length; i++) {
          const date = new Date(data[i].dt_txt).getDay();
          console.log(days[date]);
          if (((date === todayNumberInWeek + 1) || (todayNumberInWeek === 6 && date === 0)) && !this.day1Name) {
            this.day1Name = days[date];
            this.day1State = data[i].weather[0].main;
            this.day1Temp = Math.round(data[i].main.temp);

          } else if (!!this.day1Name && !this.day2Name && days[date] !== this.day1Name) {
            this.day2Name = days[date];
            this.day2State = data[i].weather[0].main;
            this.day2Temp = Math.round(data[i].main.temp);

          } else if (!!this.day2Name && !this.day3Name && days[date] !== this.day2Name) {
            this.day3Name = days[date];
            this.day3State = data[i].weather[0].main;
            this.day3Temp = Math.round(data[i].main.temp);

          } else if (!!this.day3Name && !this.day4Name && days[date] !== this.day3Name) {
            this.day4Name = days[date];
            this.day4State = data[i].weather[0].main;
            this.day4Temp = Math.round(data[i].main.temp);

          } else if (!!this.day4Name && !this.day5Name && days[date] !== this.day4Name) {
            this.day5Name = days[date];
            this.day5State = data[i].weather[0].main;
            this.day5Temp = Math.round(data[i].main.temp);

          }
        }
      });

    // });

  }

}

