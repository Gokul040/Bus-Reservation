import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookingRegister } from '../model/booking-register';
import { BusDetailsFetching } from '../model/busdetail-fetching';
import { queryModel } from '../model/query-model/query-model';


@Injectable({
  providedIn: 'root'
})
export class NetworkCallService {
      private URLRegistration="http://localhost:8080/user"
      

  constructor(public httpClient: HttpClient) { }

    createBooking(data: BookingRegister):Observable <any>
    {
          return this.httpClient.post(`${this.URLRegistration}/saveBookings`,data);
    }

    getBooking(): Observable<BookingRegister[]>{
      return this.httpClient.get<BookingRegister[]>(`${this.URLRegistration}/getAllBookings`);
    }

    getBookingById(id:number): Observable<BookingRegister>{
      return this.httpClient.get(`${this.URLRegistration}/getBookings/${id}`);
    }

    deleteBookingById(id:number): Observable<BookingRegister>{
      return this.httpClient.delete(`${this.URLRegistration}/delete/${id}`);
    }

 //  ================================================

    getAllBusDetails(): Observable<BusDetailsFetching[]>{
      return this.httpClient.get<BusDetailsFetching[]>(`${this.URLRegistration}/getAllBusDetails`);
    }
    updateBusDetails(data:any) {
      return this.httpClient.put(`${this.URLRegistration}/updateBusDetails`,data);
    }
    updateBooking(data:any) {
      return this.httpClient.put(`${this.URLRegistration}/updateBooking`,data);
    }

    deleteBusDetailsById(id:number): Observable<BusDetailsFetching>{
      return this.httpClient.delete(`${this.URLRegistration}/busDelete/${id}`);
    }
    
    createBusDetails(data: BusDetailsFetching):Observable <any>
    {
          return this.httpClient.post(`${this.URLRegistration}/saveBusDetails`,data);
    }


  //  ================================================
    
    createQuery(data: queryModel):Observable <any>
    {
          return this.httpClient.post(`${this.URLRegistration}/saveQueries`,data);
    }
    deleteQueryById(id:number): Observable<BusDetailsFetching>{
      return this.httpClient.delete(`${this.URLRegistration}/deleteQuery/${id}`);
    }
    updateQueryStatus(data:any) {
      return this.httpClient.put(`${this.URLRegistration}/updateQuery`,data);
    }
    getAllQueries(): Observable<queryModel[]>{
      return this.httpClient.get<queryModel[]>(`${this.URLRegistration}/getAllQueries`);
    }
}
