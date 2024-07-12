import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private socket: Socket) { 
    this.socket.on('welcome', (data:any) => {
      console.log(data);
    })
  }

  bookRoom(roomID:string | number, requestedNumber:number, startDate:string,endDate:string){
    
    this.socket.emit('booking', { roomID,startDate,endDate, requestedNumber });
  }


  refreshList(){ 
    return this.socket.fromEvent('refreshData').pipe(map((data:any) => data));
  }
}
