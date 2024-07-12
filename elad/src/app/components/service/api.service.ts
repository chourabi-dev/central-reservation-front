import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  SERVER:string = environment.server;

  constructor(private http:HttpClient) { }

  


  getDisponibilite(start:String,end:String){
    
    return this.http.post(`${this.SERVER}/CENTRAL_API/Disponibilite`,{
        "codehotel":environment.hotel,
        "date_arrive": start,
        "date_depart": end,
    },{headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization':  'Bearer ' + environment.token
    })})
  }
}
