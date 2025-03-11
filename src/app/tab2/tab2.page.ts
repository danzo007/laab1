import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonInput, IonItem, IonButton } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { MyHeaderComponent } from '../my-header/my-header.component';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonButton, IonItem, IonInput, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, MyHeaderComponent]
})
export class Tab2Page {
  d: number = 0;
  numbers: number[] = []; 
  calculate(a1: any, b1: any){
    try{
      const a = parseFloat(a1);
      const b = parseFloat(b1);
      
      this.numbers = []; 
      let sum = 0;

      for (let i = a; i <= b; i++) {
        const sumOfDigits = i.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
        if (sumOfDigits < 100 && sumOfDigits % 9 == 0) {
          if (sumOfDigits % 2 == 0) {
            this.numbers.push(i); 
            sum += i; 
          }
        }
      }

      this.d = sum; 
    } catch (error) {
      console.error("Ошибка при обчисленні:", error);
      this.d = 0; 
    }
  }
  constructor() {}
 
}
