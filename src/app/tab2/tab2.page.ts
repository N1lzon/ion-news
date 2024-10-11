import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonModal, IonButton, IonButtons, IonList, IonItem, IonLabel, IonAvatar, IonImg, IonGrid, IonCol } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { routes } from '../app.routes';
import { Router } from '@angular/router';
import { NoticiasService } from '../services/noticias.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonCol, IonGrid, IonImg, IonAvatar, IonLabel, IonItem, IonList, IonButtons, IonButton, IonModal, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent]
})
export class Tab2Page implements OnInit{

  constructor(private noticiaService: NoticiasService,  private router: Router){}

  noticias: any[] = [];

  ngOnInit(){
    this.cargarNoticia();
  }

  cargarNoticia() {
    this.noticias = this.noticiaService.getNoticia();
    console.log("x")
  }

  irNoticia(){
    this.router.navigate(['noticia1']);
  }
  
}


