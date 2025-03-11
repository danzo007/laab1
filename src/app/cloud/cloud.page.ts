import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonList, IonItem, IonLabel, LoadingController, AlertController } from '@ionic/angular/standalone';
import { MyHeaderComponent } from '../my-header/my-header.component';
import {Chart, registerables} from 'chart.js';
import { Book } from '../class/Book/book';
import { bookList } from '../class/Book/bookList';
@Component({
  selector: 'app-cloud',
  templateUrl: './cloud.page.html',
  styleUrls: ['./cloud.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonList, IonCardContent, IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, MyHeaderComponent]
})
export class CloudPage implements OnInit {
  @ViewChild('lineCanvas') private lineCanvas?: ElementRef;
  books = new bookList();
  lineChart: any;
  loading: any;
  dataUrl = 'https://api.jsonbin.io/v3/b/67ce1169e41b4d34e4a39729';

  lineChartMethod() {
    if(this.lineChart instanceof Chart) {
        this.lineChart.destroy();
    }
    const readerCounts: { [key: string]: number } = {};
    
    this.books.books.forEach((book) => {
        if (readerCounts[book.readerNum]) {
            readerCounts[book.readerNum]++;
        } else {
            readerCounts[book.readerNum] = 1;
        }
    });

    const labels = Object.keys(readerCounts);
    const data = Object.values(readerCounts);

    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
        type: 'bar', 
        data: {
            labels: labels,
            datasets: [{
                label: 'Кількість книг за читачем',
                data: data, 
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

  constructor(
    public loadingController: LoadingController,
    public alertController: AlertController

  ) {
    Chart.register(...registerables); 
  }

  async presetAlert(msg: string){
    const alert = await this.alertController.create({
      header:'error',
      message: msg,
      buttons: ['ok']
    });
    await alert.present();
  }
  async load(){
    this.loading = await this.loadingController.create({
      spinner: 'crescent',
      message: 'Loading...'
    });
    await this.loading.present();
    let data: any = [];
    fetch(this.dataUrl)
    .then((res) => res.json())
    .then((json)=>{
      data = json;
      data = data.record;
      let i = 0
      try{
        while (data[i] != undefined){
          this.books.addBook(data[i] as Book);
          i++
        }
      }catch(e){
          this.presetAlert('error');
          console.log((e as Error).message);
      }
      console.log(this.books)
      this.lineChartMethod();
      this.loading.dismiss();
    })
  }

  ngOnInit() {
    this.load();
  }

  isReturnedInTime(book: Book): boolean {
    
    const now = new Date();
    return new Date(book.endDate).getTime() >= now.getTime(); 
  }
  isNotReturnedInTime(book: Book): boolean {
    const now = new Date();
    return new Date(book.endDate).getTime() < now.getTime(); 
  }
}
