import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { MapComponent } from './map/map.component';
import { MapSearchComponent } from "./mapsearch/mapsearch.component";
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
// import {AppRoutingModule} from './app-routing.module';
import {HttpModule} from '@angular/http';
import {HomeComponent} from './weather/pages/home/home.component';
import {DetailsComponent} from './weather/pages/details/details.component';
import {WeatherService} from './weather/services/weather/weather.service';
import {HttpClientModule} from '@angular/common/http';
import {WeatherCardComponent} from './weather/ui/weather-card/weather-card.component';
import {AddCardComponent} from './weather/ui/add-card/add-card.component';
import {AddComponent} from './weather/pages/add/add.component';
import {LoginComponent} from './weather/pages/login/login.component';
import {SignupComponent} from './weather/pages/signup/signup.component';
import {UiService} from './weather/services/ui/ui.service';
import {CityInputComponent} from './weather/ui/weather-card/weatherInputForm/weatherInputForm.component';
import { WeatherComponent } from './weather/weather.component';
import { DataService } from './mapsearch/service.comonent';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapSearchComponent,
    HomeComponent,
    DetailsComponent,
    WeatherCardComponent,
    AddCardComponent,
    AddComponent,
    LoginComponent,
    SignupComponent,
    AddCardComponent,
    CityInputComponent,
    WeatherComponent
  ],
  imports: [
    // AppRoutingModule,
    BrowserModule,
    AgmCoreModule.forRoot({apiKey: ''}),
    FormsModule,
    NgbModule.forRoot(),
    GooglePlaceModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    GoogleMapsAPIWrapper,
    WeatherService,
    UiService,
    DataService
  ],
  bootstrap: [AppComponent,MapSearchComponent,WeatherComponent]
})
export class AppModule { }