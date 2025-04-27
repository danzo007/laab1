import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonInput, IonSegment, IonLabel, IonSegmentButton, IonSegmentView, IonSegmentContent, IonCheckbox, IonButton } from '@ionic/angular/standalone';
import { travelType, TravelType } from '../class/Travel/TravelType';
import { ITrevel } from '../class/Travel/ITrevel';
import { formConstructor } from '../forms/formconstructor';
import { TravelFactory } from '../class/Travel/TravelFactory';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
  standalone: true,
  imports: [IonButton, IonCheckbox, IonSegmentButton, IonLabel, IonSegment, IonInput, IonItem, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule, IonSegmentView, IonSegmentContent]
})
export class AddProductPage implements OnInit {
  travelForm!: FormGroup;
  currentType: TravelType = 'Hotel';
  types = travelType;
  @Output() travelAdd: EventEmitter<ITrevel> = new EventEmitter<ITrevel>();
  constructor(private fb: FormBuilder) {
    this.travelForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    price: [0, [Validators.required, Validators.min(0)]],
    dayLength: [1, [Validators.required, Validators.min(1)]],
    country: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required, Validators.minLength(3)]],
    });
   }
   onTravelPackChange(change: any){
    if(change) this.onTypeChange(this.types[2]);
    else this.currentType = this.types[1];
   }
   onTypeChange(type: any) {
    console.log(type);
    this.currentType = type as TravelType;
    formConstructor(type, this.travelForm, this.fb);
  }
  onSubmit() {
    if (this.travelForm.valid) {
      const travelData = this.travelForm.value;
      const travel = TravelFactory.createTravel(travelData)
      this.travelAdd.emit(travel);
      console.log('Form is valid', travel);
    } else {
      console.error('Form is invalid');
    }
  }
  ngOnInit() {
    this.onTypeChange(this.currentType);
  }

}
