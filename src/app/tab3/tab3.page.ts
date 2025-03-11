import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCardHeader, IonCard, IonCardTitle, IonCardContent, IonItem, IonInput, IonButton, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { NgStyle } from '@angular/common';
import { NgForOf } from '@angular/common';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [NgForOf, NgStyle, IonCol, IonRow, IonGrid, IonButton, IonInput, IonItem, IonCardContent, IonCardTitle, IonCard, IonCardHeader, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, MyHeaderComponent],
})
export class Tab3Page {
  a: any;
  calculate(n1: any){
    try{
      let n = parseFloat(n1);
      if(isNaN(n) == true){
        throw new Error('Wrong param');
      }
      if( n <= 0){
        throw new Error('Wrong param');
      }

      let i: number = 0,
        j: number = 0;
      this.a = Array(n);
      console.log('Array created');
      for(i = 0; i < n; i++){
        this.a[i] = Array(n);
        for(j = 0; j<n; j++){
          let aa: number = Math.floor(Math.random() * 100)
          this.a[i][j] = parseFloat(aa.toFixed(2))
        }
      }
    }catch(error){
      console.log(error)
    }
  }
  getColor(b: number){
    if (b <= 1) return '#0054e9'; 
    if (b <= 3) return '#006600'; 
  
    if (b % 2 === 0 || b % 3 === 0) return '#0054e9'; 
  
    for (let i = 5; i * i <= b; i += 6) {
      if (b % i === 0 || b % (i + 2) === 0) return '#0054e9';
    }
  
    return '#006600';
  }
  constructor() {}
}
