import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardTitle, IonCardHeader, IonCardContent, IonButton } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonButton, IonCardContent, IonCardHeader, IonCardTitle, IonCard, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class Tab1Page implements OnInit{
  constructor(private userService: UserService) {}

  user: any[] = [];
  userName: string = "a";
  picLink: string = "a";

  ngOnInit(){
    this.loadUser();

    this.userName = this.user[0].name;
    this.picLink = this.user[0].pic;
    
  }

  loadUser() {
    this.user = this.userService.gerUser();
  }

}
