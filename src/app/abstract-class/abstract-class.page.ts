import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardTitle, IonCardContent, IonCardHeader, IonItem } from '@ionic/angular/standalone';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { KitchenMachine } from '../class/Abstract/KitchenMachine';
import { MachineFactory } from '../class/Abstract/MachineFactory';
@Component({
  selector: 'app-abstract-class',
  templateUrl: './abstract-class.page.html',
  styleUrls: ['./abstract-class.page.scss'],
  standalone: true,
  imports: [IonItem, IonCardHeader, IonCardContent, IonCardTitle, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, MyHeaderComponent]
})
export class AbstractClassPage implements OnInit {
  ngOnInit() {
    this.load();
  }
  dataUrl = 'https://api.jsonbin.io/v3/b/67cf7b8b8a456b7966737580';
  machines: KitchenMachine[] = [];
  data: any = [];
  mostPowerfulMachine: any;
  constructor() { }
  async load(){
      this.data = [];
      this.machines = [];
      fetch(this.dataUrl)
      .then((res) => res.json())
      .then((json)=>{
        this.data = json;
        this.data = this.data.record;
        console.log(this.data)
        let i = 0
          while (this.data[i] != undefined){
            console.log(this.data[i]['name'])
           let f = MachineFactory.getMachine(
            this.data[i]['name'],
            this.data[i]['power'],
            this.data[i]['weight'],
            this.data[i]['bladeCount'] | this.data[i]['slotCount']
           );
           this.machines.push(f);
           i++
          }
          console.log(this.machines)
          this.mostPowerfulMachine = this.findMostPowerfulMachine(); 
          console.log( this.mostPowerfulMachine);
      })
    }
    
  findMostPowerfulMachine(): KitchenMachine | null {
    if (this.machines.length === 0) {
      return null; 
    }

    return this.machines.reduce((prev, current) => {
      return (prev.power > current.power) ? prev : current; 
    });
  }

  getColor(power: number) {
    if (!this.mostPowerfulMachine) {
      return 'rgb(255, 255, 255)'; // або інший колір, якщо найпотужніша машина ще не визначена
    }
    
    let mostPowerfulMachinePower = this.mostPowerfulMachine.power;
    return (power < mostPowerfulMachinePower) ? 'rgb(237, 144, 14)' : 'rgb(30, 199, 95)';
  }
}
