import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonTabButton, IonButton, IonIcon, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronBackOutline, heart, arrowBackOutline } from 'ionicons/icons';
import { Router } from '@angular/router';
import { NoticiasService } from 'src/app/services/noticias.service';

@Component({
  selector: 'app-noticia1',
  templateUrl: './noticia1.page.html',
  styleUrls: ['./noticia1.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, IonIcon, IonButton, IonTabButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class Noticia1Page implements OnInit{


  constructor(private router: Router, private noticiaService: NoticiasService) { 
    addIcons({arrowBackOutline,heart,});
  }

  goBack() {
    this.router.navigate(['tabs/tab2']);
  }

  noticias: any[] = [];

  ngOnInit(){
    this.cargarNoticia();
  }

  cargarNoticia() {
    this.noticias = this.noticiaService.getNoticia();
    console.log("x")
  }

}
