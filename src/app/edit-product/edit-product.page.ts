import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonInput, IonButton } from '@ionic/angular/standalone';
import { ITrevel } from '../class/Travel/ITrevel';
import { travelType } from '../class/Travel/TravelType';
import { Travel } from '../class/Travel/Travel';
import { TravelFactory } from '../class/Travel/TravelFactory';
import { formConstructor } from '../forms/formconstructor';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.page.html',
  styleUrls: ['./edit-product.page.scss'],
  standalone: true,
  imports: [IonButton, IonItem, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ReactiveFormsModule, IonInput]
})
export class EditProductPage implements OnInit {
  @Input() travel!: ITrevel;
  @Output() travelEdit: EventEmitter<ITrevel> = new EventEmitter<ITrevel>();
  travelFrom!: FormGroup;
  types = travelType;
  constructor(private fb: FormBuilder) { }
  onSubmit(): void{
    if (this.travelFrom.valid) {
      const travelData = this.travelFrom.value;
      travelData.travelType = this.travel.getTravelType();
      
      const travel = TravelFactory.createTravel(travelData);
      this.travelEdit.emit(travel);
      console.log('Form is valid', travel);
    } else {
      console.error('Form is invalid');
    }
  }
  ngOnInit() {
    console.log(this.travel);
    this.travelFrom = this.fb.group({
      name: [this.travel.getName(), [Validators.required, Validators.minLength(3)]],
      price: [this.travel.getPrice(), [Validators.required, Validators.min(0)]],
      dayLength: [this.travel.getDayLength(), [Validators.required, Validators.min(1)]],
      country: [this.travel.getCountry(), [Validators.required, Validators.minLength(3)]],
      description: [this.travel.getDescription(), [Validators.required, Validators.minLength(3)]],
    });
    formConstructor(this.travel.getTravelType(), this.travelFrom, this.fb);
  }
}
