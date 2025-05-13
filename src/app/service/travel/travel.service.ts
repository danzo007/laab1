import { ellipse } from 'ionicons/icons';
import { Injectable } from '@angular/core';
import { ITrevel } from 'src/app/class/Travel/ITrevel';
import { Travel } from 'src/app/class/Travel/Travel';
import { TravelFactory } from 'src/app/class/Travel/TravelFactory';
import { TravelType } from 'src/app/class/Travel/TravelType';
import { ConfigService } from '../config.service';
import { BehaviorSubject } from 'rxjs';
import { Database, ref, set, push, update, remove, onValue } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class TravelService {
  private travelSubject = new BehaviorSubject<ITrevel[]>([]);
  travels$ = this.travelSubject.asObservable();
  constructor(private db: Database){}

  fetchTravels(): void {
    const travelsRef = ref(this.db);

    console.log(travelsRef);
    onValue(travelsRef, (snapshot) => {
      const data = snapshot.val();
      const travels = data ? Object.entries(data).map(([key, value]: [string, any]) => TravelFactory.createTravel({ ...value, id: key })) : [];
      this.travelSubject.next(travels);
    });
  }

  addTravel(travel: ITrevel): void {
    const travelsRef = ref(this.db);
    const newTravelRef = push(travelsRef);
    set(newTravelRef, {
      ...travel,
      id: newTravelRef.key,
      type: travel.getTravelType()
    });
  }
  
  editTravel(updatedTravel: ITrevel): void {
    const travelRef = ref(this.db, `${updatedTravel.getID()}`);
    update(travelRef, updatedTravel);
  }

  deleteTravel(travelId: string): void {
    const travelRef = ref(this.db, `travels/${travelId}`);
    remove(travelRef);
  }

}

/*
const api = 'https://api.jsonbin.io/v3/b/67f0840b8960c979a57e7e28'
@Injectable({
  providedIn: 'root'
})
export class TravelService {
  public travels: ITrevel[] = [];
  addTravel(travel: ITrevel) {
    this.travels.push(travel);
  }

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
        this.searchTravel = this.travels;

      })
}

  searchTravel: ITrevel[] = [];
  search(type: TravelType){
    this.searchTravel = this.travels.filter((travel) => {
      return travel.getTravelType() == type;
    })
    console.log(this.searchTravel);
    console.log(123123123);
    console.log(this.travels);
  }
  constructor(private configService: ConfigService) { }

  typeSub = this.configService.type$.subscribe(() => {
    let type = this.configService.type$.value;
    this.search(type);
  });
}

*/
