import { Injectable } from '@angular/core';
import { ITrevel } from 'src/app/class/Travel/ITrevel';
import { TravelFactory } from 'src/app/class/Travel/TravelFactory';
const api = 'https://api.jsonbin.io/v3/b/67f0840b8960c979a57e7e28'
@Injectable({
  providedIn: 'root'
})
export class TravelService {
  public travels: ITrevel[] = [];
  addTravel(travel: ITrevel) {
    this.travels.push(travel);
  }
  constructor() { }
  public async load() {
    fetch(api)
      .then((res) => res.json())
      .then((json) => {
        let data;
        data = json;
        data = data.record;
        console.log(data);
        let travels = data.map((item: any) => TravelFactory.createTravel(item));
        this.travels = []
        travels.forEach((travel: any) => this.addTravel(travel));
        console.log(this.travels);
      })
}
}

