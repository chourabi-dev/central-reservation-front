import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { Convert, Detail, RommsAavaibility } from '../../models/hotel';
import { BookingService } from '../../service/booking.service';

@Component({
    selector: 'app-hotels-listing-page',
    templateUrl: './hotels-listing-page.component.html',
    styleUrls: ['./hotels-listing-page.component.scss']
})
export class HotelsListingPageComponent implements OnInit {

    datePickerConfig = {
        format: 'DD-MM-YYYY' // 05/05/2024
    };
    startDate:string = '';
    endDate:string =''; 




    rooms:Detail[] = [];

    isLoading = false;


    constructor(private route:ActivatedRoute, private api:ApiService, private socket:BookingService) { }

    ngOnInit(): void {
        const params = this.route.snapshot.params;

        this.startDate = params['startDate'].replace(/-/g,'/');
        this.endDate = params['endDate'].replace(/-/g,'/');
  
        this.initDATA();
        this.listenToChanges();
        
    }


    initDATA(){

        this.isLoading = true;
        
        this.api.getDisponibilite(this.startDate,this.endDate).subscribe((res:any)=>{ 
           
            let obj:RommsAavaibility = res;
            this.rooms = [];

           obj.details.forEach((room:Detail)=>{
                
                // before 
                let uintArray = new Uint8Array(room.category.images[0].image.map((x) => x & 0xff));

                // Convert Uint8Array to Blob
                let blob = new Blob([uintArray], { type: 'image/jpeg' }); // Adjust 'image/jpeg' based on your image type

                // Convert Blob to base64
                let reader = new FileReader();
                reader.onload = function() {
                    let base64String = reader.result;
                    
                    room.category.image = base64String; 
 
                };
                reader.readAsDataURL(blob);

                this.rooms.push(room);
 
                 
                
           })

           this.isLoading = false;
            
        })
    }




    listenToChanges(){
        this.socket.refreshList().subscribe((res:any)=>{
            console.log(res);
            
            console.log("refresh list");

            this.initDATA();
        })
    }

}