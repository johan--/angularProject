import {Injectable, OnChanges} from '@angular/core';

@Injectable()
export class DataService implements OnChanges {
    ngOnChanges(){
        
    }
    serviceData: string;
}