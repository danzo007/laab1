import { TravelService } from './../service/travel/travel.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardTitle, IonCardContent, IonCardHeader, IonItem, IonTabs, IonButton, IonInput, IonList, IonLabel, IonCardSubtitle } from '@ionic/angular/standalone';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { AddProductPage } from "../add-product/add-product.page";
import { EditProductPage } from "../edit-product/edit-product.page";
@Component({
  selector: 'app-travel-page',
  templateUrl: './travel-page.page.html',
  styleUrls: ['./travel-page.page.scss'],
  standalone: true,
  imports: [IonCardSubtitle, IonLabel, IonList, IonInput, IonButton, IonItem, IonCardHeader, IonCardTitle, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, MyHeaderComponent, IonCardContent, AddProductPage, EditProductPage]
})
export class TravelPagePage implements OnInit {

  constructor(public travelService: TravelService) { }

  ngOnInit() {
    this.travelService.load();
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
}
