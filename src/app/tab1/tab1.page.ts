import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonInput, IonButton } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { MyHeaderComponent } from '../my-header/my-header.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonButton, IonInput, IonItem, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, MyHeaderComponent],
})
export class Tab1Page {
  d: number = 0;
  calculate(a1: any, b1: any, c1: any){
    this.d = 0;
    try{
    let a = parseFloat(a1),
      b = parseFloat(b1),
      c = parseFloat(c1)
    if(isNaN(a) == true || isNaN(b) == true || isNaN(c) == true){
      throw new Error('Wrong param')
    }
    const numbers = [a, b, c];
    for (let i = 0; i < numbers.length; i++) {
      const num = numbers[i];
      const firstDigit = parseInt(Math.abs(num).toString()[0]) % 2;
      if ( firstDigit == 0 && num > 8) {
        this.d += Math.pow(num, 2);
      }
    }
  } catch (error){
    this.d = 0;
    console.log(error);
  }
    
  }
  constructor() {}
}