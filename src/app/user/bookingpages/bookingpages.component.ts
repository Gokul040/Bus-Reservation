import { Component,OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { NetworkCallService } from 'src/app/ServiceFolder/NetworkCall.service';
import { BookingRegister } from 'src/app/model/booking-register';
import { BusDetailsFetching } from 'src/app/model/busdetail-fetching';



@Component({
  selector: 'app-bookingpages',
  templateUrl: './bookingpages.component.html',
  styleUrls: ['./bookingpages.component.css']
})
export class BookingpagesComponent implements OnInit {


  fromplace: any;
  arrivalplace: any;
  dtOptions:DataTables.Settings={};
  dtTrigger: Subject<any>=new Subject<any>();
  data!: BusDetailsFetching; 
  BusData:any;
  FromSelect: any;
  bookingForm!: FormGroup;
  bookingRegister : BookingRegister=new BookingRegister();
  minDate!: string; 
  showBookingTable:boolean = false;
  bookingId!:number;
  PNRstatus:boolean = false;
  bookiId?:number;

  public selectedBus:any = {
    passengerName:'',
    contactNumber: '',
    fromPlace:'',
    arrivalPlace:'',
    busDate:'',
    busNo:''
  }

  constructor(public fb: FormBuilder, private getService: NetworkCallService){
    this.bookingForm = this.fb.group({
      passengerName: ['', [Validators.required,Validators.pattern('[a-zA-Z ]*'),Validators.maxLength(16)]],
      contactNumber: ['', [Validators.required,Validators.maxLength(10),Validators.pattern('[0-9]*')]],
      fromPlace: ['',[Validators.required,Validators.pattern('[a-zA-Z ]*'),Validators.maxLength(16)]],
      arrivalPlace: ['', [Validators.required,Validators.pattern('[a-zA-Z ]*'),Validators.maxLength(16)]],
      busNo: ['', [Validators.required,Validators.pattern('[0-9]*'),Validators.maxLength(5)]],
      busDate: ['', [Validators.required]],
    });

    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = (today.getMonth()+1).toString().padStart(2,'0');
    const dd = today.getDate().toString().padStart(2,'0');
    this.minDate = `${yyyy}-${mm}-${dd}`;
  }
  get passengerName(){
    return this.bookingForm.get('passengerName');
    }
    
    
    get contactNumber(){
    return this.bookingForm.get('contactNumber');
    }
    get fromPlace(){
      return this.bookingForm.get('fromPlace');
      }
      get arrivalPlace(){
        return this.bookingForm.get('arrivalPlace');
        }
        get busNo(){
          return this.bookingForm.get('busNo');
          }
          get busDate(){
            return this.bookingForm.get('busDate');
            }


  ngOnInit(): void {    
    this.dtOptions={
      pagingType: 'simple_numbers'
    };
    this.getBusDetails();
  }

  getBusDetails(){
  this.getService.getAllBusDetails().subscribe(BusData=>{
    console.log(BusData)
    this.BusData = BusData;
    this.dtTrigger.next(null);
  });
  }
  onBook(busdata:any){
    this.selectedBus = busdata;
    this.showBookingTable = true;
}

addbook(){
    var inputElement1 = <HTMLInputElement>document.getElementById("InputName");
    var inputElement2 = <HTMLInputElement>document.getElementById("mobileNumber");

    var passengerName = inputElement1.value;
    var number = inputElement2.value;

    this.selectedBus.passengerName = passengerName;
    this.selectedBus.contactNumber = number;

    console.log(passengerName);
    console.log(number);
}

  saveBooking():void{
      this.bookingRegister = this.selectedBus;
      this.getService.createBooking(this.bookingRegister).subscribe(( booking:BookingRegister) => {this.bookingRegister.bookingId = booking.bookingId;
        this.PNRstatus = true; 
        // window.alert("Registraion Succesful. Your Ticket PNR is: " + booking.bookingId)
        this.bookiId = booking.bookingId;},
        error => {window.alert("Registraion UnSuccesful")
     });     
    }


 

}
