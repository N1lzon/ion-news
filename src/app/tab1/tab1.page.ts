import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardTitle, IonCardHeader, IonCardContent, IonButton, IonSearchbar, IonIcon, IonGrid, IonRow, IonCol, IonCardSubtitle } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { UserService } from '../services/user.service';
import { addIcons } from 'ionicons';
import { cashOutline, americanFootballOutline, cloudyOutline, earthOutline, gameControllerOutline, arrowDownOutline, cloudyNightOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonCardSubtitle, IonCol, IonRow, IonGrid, IonIcon, IonSearchbar, IonButton, IonCardContent, IonCardHeader, IonCardTitle, IonCard, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class Tab1Page{
  constructor() {
    addIcons({cashOutline,americanFootballOutline,cloudyOutline,gameControllerOutline,cloudyNightOutline,arrowDownOutline,earthOutline});
  }


}
