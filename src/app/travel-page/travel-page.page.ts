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
import { ITrevel } from '../class/Travel/ITrevel';
@Component({
  selector: 'app-travel-page',
  templateUrl: './travel-page.page.html',
  styleUrls: ['./travel-page.page.scss'],
  standalone: true,
  imports: [FilterPage, IonCardSubtitle, IonLabel, IonList, IonInput, IonButton, IonItem, IonCardHeader, IonCardTitle, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, MyHeaderComponent, IonCardContent, AddProductPage, EditProductPage, FilterPage]
})
export class TravelPagePage implements OnInit {

  constructor(public travelService: TravelService) { }
  travels: ITrevel[] = [];
  ngOnInit() {
    this.travelService.travels$.subscribe((travels) => {
      this.travels = travels;
    })
    this.travelService.fetchTravels();
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
    this.travelService.editTravel($event);
    this.showEditForm = false;
  }
  deleteProduct(index: number){
    this.travelService.deleteTravel(this.travels[index].getID());
  }
}
