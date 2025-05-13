import { ConfigService } from './../service/config.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonButton, IonLabel } from '@ionic/angular/standalone';
import { Travel } from '../class/Travel/Travel';
import { Subscription } from 'rxjs';
import { TravelService } from '../service/travel/travel.service';
import { travelType } from '../class/Travel/TravelType';
import { TravelType } from '../class/Travel/TravelType';
@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
  standalone: true,
  imports: [IonLabel, IonButton, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class FilterPage implements OnInit {
  private configService = new ConfigService();
  private subscription: Subscription[] = [];

  constructor() { }
  type: TravelType = travelType[0];
  count = 0;
  loading: any;
  ngOnInit() {
    const typeSub = this.configService.type$
      .subscribe(() => {
        this.type = this.configService.type$.value;
      });
    this.subscription.push(typeSub);
  }
  nextType() {
    if(this.count < travelType.length - 1) {
      this.count++;
    }
    else {
      this.count = 0;
    }
    this.configService.setType(travelType[this.count]);

  }
  ngOnDestroy() {
    this.subscription.forEach((sub) => sub.unsubscribe());
  }

}
