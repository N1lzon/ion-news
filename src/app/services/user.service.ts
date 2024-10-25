import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  gerUser(){
    return [
      {
        name: 'Nilson',
        pic:'https://raw.githubusercontent.com/N1lzon/imagenes/refs/heads/main/Mcal%20Lopez%20crop.jpg',
        job:'Web Developer',
        mail:'nilsoncasco@outlook.com'
      }
    ];
  }
}
