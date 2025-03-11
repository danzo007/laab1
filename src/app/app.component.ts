import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonMenu, IonHeader, IonTitle, IonToolbar, IonMenuToggle, IonList, IonItem, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone:true,
  imports: [IonApp, IonRouterOutlet, IonMenu, IonHeader, IonTitle, IonToolbar, IonMenuToggle, IonList, IonItem, IonContent],
})
export class AppComponent {
  constructor() {}
}
