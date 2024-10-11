import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonAvatar } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonAvatar, IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent],
})
export class Tab3Page implements OnInit{

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
