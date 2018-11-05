import {Component, OnChanges,Input} from '@angular/core';
import {UiService} from './services/ui/ui.service';
import { MapSearchComponent } from '../mapsearch/mapsearch.component';
import { DataService } from '../mapsearch/service.comonent';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnChanges {
  // cityName:string=""; //this is where the name of the city should come in
  // cityName:string="Sydney";
  
  showMenu = false;
  darkModeActive: boolean;
  
  get cityName():string{
    return this.dataService.serviceData;
  }
  set cityName(value:string){
    this.dataService.serviceData=value;
  }

  constructor(public ui: UiService,public dataService: DataService) {
    
  }
  
  ngOnChanges() {
    // this.cityName=this.mapSearch.getCity();
    // console.log(this.cityName+"is the name of the city in weather component");
    this.ui.darkModeState.subscribe((value) => {
      this.darkModeActive = value;
    });
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  modeToggleSwitch() {
    this.ui.darkModeState.next(!this.darkModeActive);
  }

}
