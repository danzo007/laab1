import { DEFAULT_CURRENCY_CODE, Injectable } from '@angular/core';
import { TravelType, travelType } from '../class/Travel/TravelType';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  currentType = DEFAULT_TYPE;
  type$: BehaviorSubject<TravelType> = new BehaviorSubject<TravelType>(DEFAULT_TYPE);
  setType(type: TravelType) {
    console.log(type);
    this.type$.next(type);
  }
  
  constructor() { }
}

const DEFAULT_TYPE = travelType[0];
