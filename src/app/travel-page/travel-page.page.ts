import { TravelService } from './../service/travel/travel.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardTitle, IonCardContent, IonCardHeader, IonItem, IonTabs, IonButton, IonInput, IonList, IonLabel, IonCardSubtitle } from '@ionic/angular/standalone';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { AddProductPage } from "../add-product/add-product.page";
import { EditProductPage } from "../edit-product/edit-product.page";
import { FilterPage } from "../filter/filter.page";
import { ConfigService } from './../service/config.service';
import { Subscription } from 'rxjs';
import { travelType } from '../class/Travel/TravelType';
import { Travel } from '../class/Travel/Travel';
import { TravelType } from '../class/Travel/TravelType';
@Component({
  selector: 'app-travel-page',
  templateUrl: './travel-page.page.html',
  styleUrls: ['./travel-page.page.scss'],
  standalone: true,
  imports: [FilterPage, IonCardSubtitle, IonLabel, IonList, IonInput, IonButton, IonItem, IonCardHeader, IonCardTitle, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, MyHeaderComponent, IonCardContent, AddProductPage, EditProductPage, FilterPage]
})
export class TravelPagePage implements OnInit {

  constructor(public travelService: TravelService) { }

  ngOnInit() {
    this.travelService.load();
    const typeSub = this.configService.type$
    .subscribe(() => {
      this.type = this.configService.type$.value;
    });
    this.subscription.push(typeSub);
  }
  showAddForm = false;
  addFormShow(){
    this.showAddForm = true;
  }
  addProduct($event: any){
    this.travelService.addTravel($event);
    this.showAddForm = false;
  }
  showEditForm = false;
  editFormNumber = 0;
  editFormShow(index: number){
    this.showEditForm = true;
    this.editFormNumber = index;
  }
  editProduct($event: any, index: number){
    this.travelService.travels[index] = $event;
    this.showEditForm = false;
  }
    private configService = new ConfigService();
    private subscription: Subscription[] = [];
  
    type: TravelType = travelType[0];
    count = 0;
    loading: any;
    showFilter = false;
    nextType() {
      this.showFilter = true;
      if(this.count < travelType.length - 1) {
        this.count++;
      }
      else {
        this.count = 0;
      }
      this.configService.setType(travelType[this.count]);
      this.travelService.search(this.configService.type$.value);
    }
    ngOnDestroy() {
      this.subscription.forEach((sub) => sub.unsubscribe());
    }
}
