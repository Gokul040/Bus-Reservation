import { Component } from '@angular/core';
import { error } from 'jquery';
import { BookingRegister } from 'src/app/model/booking-register';
import { NetworkCallService } from 'src/app/ServiceFolder/NetworkCall.service';

@Component({
  selector: 'app-cancelticket',
  templateUrl: './cancelticket.component.html',
  styleUrls: ['./cancelticket.component.css']
})
export class CancelticketComponent {
  // ticketnumber: any;
  data!: BookingRegister; 
  cancellationStatus!: boolean;
  bookiId?:number;
  ticketnumber!: number;
  status: boolean=false;
  errorMessage: any;

  constructor(private getService: NetworkCallService) {
    
   }
  ngOnInit(): void {
     
  }
  ngSubmit(){
  this.getService.deleteBookingById(this.ticketnumber).subscribe(
    (data: any) => {
     window.alert("Your Ticket has been cencelled Successfully");
 },
    ( error: any) => {
      this.status = true;
    //  window.alert("Your Booking Deleted Successfully");
    //  window.alert("Enter Correct PNR Number");
 }
 );  
}

}
  
