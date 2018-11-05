import { Component, ViewChild,Output, OnChanges, Injectable,HostBinding } from '@angular/core';
//import { GooglePlaceDirective } from "../../src1/ngx-google-places-autocomplete.directive";
import { GooglePlaceDirective } from "ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive";
//import { ComponentRestrictions } from "../../src1/objects/options/componentRestrictions";
import { ComponentRestrictions } from "ngx-google-places-autocomplete/objects/options/componentRestrictions";
//import { Address } from "../../src1/objects/address";
import { Address } from "ngx-google-places-autocomplete/objects/address";
import { BehaviorSubject } from 'rxjs';
import { DataService } from './service.comonent';

@Component({
    selector: 'map-search',
    template: `<input type="text" class="form-control form-control-lg" name="cityName" [(ngModel)]="cityName" placeholder="Enter address..." ngx-google-places-autocomplete #places="ngx-places" (onAddressChange)="onChange($event)" />`,
})
//<button (click)="search()">Execute search</button>
// @Injectable()
export class MapSearchComponent implements OnChanges {
    @ViewChild('places') places: GooglePlaceDirective;
    // cityName:string="Johannesburg";
    // private messageSource=new BehaviorSubject(this.cityName);
    // currentMessage=this.messageSource.asObservable();
    // setCity(cityName:string){
    //     this.cityName = cityName;
    // }
    // getCity():string{
    //     return this.cityName;
    // }
    constructor(public dataService:DataService){

    }
    get cityName():string{
        return this.dataService.serviceData;
    }
    set cityName(value:string){
        this.dataService.serviceData=value;
    }
    ngOnChanges(){
        // this.setCity(this.cityName);
    }
    public onChange(address: Address) {
        console.log(address.geometry.location.lng());
        console.log(address.geometry.location.lat());
        console.log(address.geometry.location.toJSON());
        console.log(address.geometry.viewport.getNorthEast());
        console.log(this.cityName+" is in the mapSearchComponent");
        
    }

    public changeConfig() {
        this.places.options.componentRestrictions = new ComponentRestrictions({
            country: "UA"
        });

        this.places.reset();
    }
}