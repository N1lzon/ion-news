import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar, IonRow, IonIcon, IonCard } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { UserService } from '../services/user.service';
import { addIcons } from 'ionicons';
import { share } from 'ionicons/icons';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonCard, IonIcon, IonRow, IonAvatar, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class Tab3Page implements OnInit{

  constructor(private userService: UserService) {
    addIcons({share});

  }

  user: any[] = [];
  userName: string = "a";
  picLink: string = "a";
  job: string = "a";
  mail: string = "a";

  ngOnInit(){
    this.loadUser();

    this.userName = this.user[0].name;
    this.picLink = this.user[0].pic;
    this.job = this.user[0].job;
    this.mail = this.user[0].mail;

    
  }

  loadUser() {
    this.user = this.userService.gerUser();
  }

  
}
