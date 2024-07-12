import { Component, Input } from '@angular/core';
import { Detail } from 'src/app/components/models/hotel';
import { BookingService } from 'src/app/components/service/booking.service';
import { CartService } from 'src/app/components/service/cart.service';

@Component({
  selector: 'app-single-hotel', 
  templateUrl: './single-hotel.component.html',
  styleUrl: './single-hotel.component.scss'
})
export class SingleHotelComponent {
  @Input() r:Detail | any;
  @Input() startDate:string | any;
  @Input() endDate:string | any;

  requestedNumber:number = 1;
  

  constructor(private socket:BookingService, public cart:CartService){}


  bookRoom(room:Detail ){
      // emit event
      const starDATE = this.startDate.replace(/-/g,'/');
      const endDATE = this.endDate.replace(/-/g,'/'); 
      this.socket.bookRoom(room.category.codCategChannel, this.requestedNumber, starDATE,endDATE);
      console.log("event sent  !!");
       
      this.r.disponible = this.r.disponible - this.requestedNumber;
      this.cart.addRoom(room,this.requestedNumber);
      
  }

  decrementValue(){
    if(this.requestedNumber > 1){
      this.requestedNumber --;
    }
  }

  incrementValue(){
    // we must not exid the max 
    if(this.requestedNumber < this.r.disponible){
      this.requestedNumber ++;
      }


  }


}
