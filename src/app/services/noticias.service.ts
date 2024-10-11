import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class NoticiasService {

  getNoticia(){
    return [
      {
        titulo: 'Everything We Learned About The Ghost Of Tsushima Sequel',
        imagen:'https://i.kinja-img.com/image/upload/c_fit,q_60,w_1600/9cf21c9511f2370f1f68183d8979a9f1.jpg',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magni vel, deserunt a atque ea nisi laborum, iure repellat ratione consequatur rem sint totam, suscipit eaque porro inventore aliquid ullam!'
      },
    ];
  }
}
