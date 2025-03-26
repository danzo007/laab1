import { RecursionService } from './../service/recursion/recursion.service';
import { SeriesService } from './../service/series/series.service';
import { TabService } from './../service/tab/tab.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardTitle, IonCardContent, IonCardHeader, IonItem, IonTabs, IonButton, IonInput, IonList, IonLabel } from '@ionic/angular/standalone';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { Chart, registerables } from 'chart.js';
@Component({
  selector: 'app-servicepage',
  templateUrl: './servicepage.page.html',
  styleUrls: ['./servicepage.page.scss'],
  standalone: true,
  imports: [IonLabel, IonList, IonInput, IonButton, IonItem, IonCardHeader, IonCardContent, IonCardTitle, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, MyHeaderComponent]
})
export class ServicepagePage implements OnInit {
  xyTab = new Map();
  xySeries = new Map();
  xyRecursion = new Map();
  xyInput: string[] = [];
  constructor(private tabService: TabService, private seriesService: SeriesService, private recursionService: RecursionService) { 
    Chart.register(...registerables)
  }

  xx: string[] = [];
  yySer: number[] = [];
  yyTab: number[] = [];
  yyRec: number[] = [];

  @ViewChild('lineCanvas') private lineCanvas?: ElementRef;

  lineChart: any;
  lineChartMake(){
    if(this.lineChart instanceof Chart) {
      this.lineChart.destroy();
    }
    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      type: 'line',
      data: {
        labels: this.xx,
        datasets: [
          {
            label: 'Tab',
            data: this.yyTab,
            fill: false,
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
            borderDashOffset: 0.0,
            pointRadius: 2,
            spanGaps: false
          },
          {
            label: 'Rec',
            data: this.yyRec,
            fill: false,
            borderColor: 'rgb(17, 250, 0)',
            borderWidth: 1,
            borderDashOffset: 0.0,
            pointRadius: 4,
            spanGaps: false
          },
          {
            label: 'Ser',
            data: this.yySer,
            fill: false,
            borderColor: 'rgb(16, 5, 238)',
            borderWidth: 1,
            borderDashOffset: 0.0,
            pointRadius: 6,
            spanGaps: false
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x:{
            suggestedMin:0,
            title:{
              display: true,
              text: 'X'
            },
            ticks:{
              stepSize: 0.001,
            },
          },
          y:{
            title:{
              display: true,
              text: 'Y'
            },
            ticks:{
              stepSize: 0.001,
            },
          },
        },
      },
    });
  }

  input(){
    this.yySer = new Array;
    this.yyRec = new Array;
    this.xyInput = [];
    this.xx.forEach((value, index) => {
      let s = '';
      let y: number = 0;
      y = this.yyTab[index];
      
      
      s = y.toFixed(4) + ' ';
      
      y = this.xySeries.get(value);
      this.yySer.push(y);
      s = s + y.toFixed(4);
      y = this.xyRecursion.get(value);
      
      this.yyRec.push(y);
      s = s + ' ' + y.toFixed(4);
      this.xyInput.push(s);
    });
    
    console.log(this.xyInput);
  }
  ras(xn: any, xk: any, h: any){
    try{
      let xn1 = parseFloat(xn);
      let xk1 = parseFloat(xk);
      let h1 = parseFloat(h);
      this.xx = [];
      this.yyTab = [];
      let obj = this.tabService.getTab(xn1, xk1, h1);
      console.log(obj);
      this.xx = obj.x;
      this.yyTab = obj.y;
      this.xySeries = this.seriesService.getTab(xn1, xk1, h1);
      console.log(this.xySeries);
      this.xyRecursion = this.recursionService.getTab(xn1, xk1, h1);
      console.log("Recursion");
      console.log(this.xyRecursion);
      this.input();
      this.lineChartMake();
    }catch{}
  

  }

  ngOnInit() {}
}
