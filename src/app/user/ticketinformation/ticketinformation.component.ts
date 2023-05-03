import { Component,OnInit } from '@angular/core';
import { error } from 'jquery';
import { BookingRegister } from 'src/app/model/booking-register';
import { NetworkCallService } from 'src/app/ServiceFolder/NetworkCall.service';

@Component({
  selector: 'app-ticketinformation',
  templateUrl: './ticketinformation.component.html',
  styleUrls: ['./ticketinformation.component.css']
})
export class TicketinformationComponent implements OnInit{
 
  ticketnumber: any;
   

  data!: BookingRegister; 
  
    

  constructor(private getService: NetworkCallService) {
    
   }
  ngOnInit(): void {
    
  }


   onSubmit() {
    this.getService.getBookingById(this.ticketnumber).subscribe(data => {
      this.data = data
     
    },
      (error) =>  {
        window.alert("Registraion UnSuccesful");

  }
   )};

  printThisPage() {
    window.print();
  }
}
