import { Injectable } from '@angular/core';
import { Detail } from '../models/hotel';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  tmpList:any[] = [];

  constructor() { }


  addRoom(room:Detail,requestedNumber:number){
    this.tmpList.push({room,requestedNumber}); 
  }


  checkIFRoomAdded(room:Detail){
    let result = false;
    this.tmpList.forEach(element => {
      if(element.room.category.codCategChannel == room.category.codCategChannel){
        result = true;
      }
      });
      return result;
  }
}
