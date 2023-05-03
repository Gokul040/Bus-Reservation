import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { NetworkCallService } from 'src/app/ServiceFolder/NetworkCall.service';
import { BookingRegister } from 'src/app/model/booking-register';
import { BusDetailsFetching } from 'src/app/model/busdetail-fetching';

@Component({
  selector: 'app-bookingdetails',
  templateUrl: './bookingdetails.component.html',
  styleUrls: ['./bookingdetails.component.css']
})
export class BookingdetailsComponent implements OnInit {
  fromplace: any;
  toplace: any;
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject<any>();
  data!: BusDetailsFetching;
  BookingData: any;
  FromSelect: any;
  bookingForm!: FormGroup;
  bookingNew: BookingRegister = new BookingRegister();
  minDate!: string;
  selectedBus: any;
  showBookingTable: boolean = false;
  bookingId!: number;
  updateStatus: boolean = false;
  BusStatus: boolean = false;
  bookingIDsave?: number;
  newbookingForm!: FormGroup;

  public updatebooking = {
    bookingId:'',
    passengerName:'',
    fromPlace:'',
    arrivalPlace:'',
    contactNumber:'',
    busDate:'',
    busNo:''
  }
  constructor(public fb: FormBuilder, private getService: NetworkCallService) {
    this.newbookingForm = this.fb.group({
      passengerName: ['', [Validators.required,Validators.pattern('[a-zA-Z ]*'),Validators.maxLength(16)]],
      busCoach: ['', [Validators.required,Validators.pattern('[a-zA-Z ]*'),Validators.maxLength(16)]],
      fromPlace: ['', [Validators.required,Validators.pattern('[a-zA-Z ]*'),Validators.maxLength(16)]],
      arrivalPlace:['', [Validators.required,Validators.pattern('[a-zA-Z ]*'),Validators.maxLength(16)]],
      bookingId: ['', [Validators.required]],
      busDate: ['',[Validators.required]],
      busNo: ['',[Validators.required]]
    });


    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = (today.getMonth() + 1).toString().padStart(2, '0');
    const dd = today.getDate().toString().padStart(2, '0');
    this.minDate = `${yyyy}-${mm}-${dd}`;
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'simple_numbers',
      pageLength: 10,
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'print','pdf'
    ]
    };
    this.getBookingDetails();
  }

  getBookingDetails() {
    this.getService.getBooking().subscribe(BookingData => {
      console.log(BookingData)
      this.BookingData = BookingData;
      this.dtTrigger.next(null);
    });
  }
  
  edit(bookingdata:any) {
    this.updatebooking = bookingdata;
    console.log(bookingdata)
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
 
  updateBookingDetails(){
    this.getService.updateBooking(this.updatebooking).subscribe(( booking:BookingRegister) => {
     },
    error => {
      this.updateStatus = true; 
   } );     
  
  }

  deleteBooking(id:any){
    this.getService.deleteBookingById(id).subscribe();
    this.getService.getBooking().subscribe(BookingData => {
      this.BookingData = BookingData;
    });
  }
  saveBooking():void{
    this.getService.createBooking(this.bookingNew).subscribe(( bookingDetails:BookingRegister) => {
      this.bookingNew.bookingId = bookingDetails.bookingId;
      this.BusStatus = true; 
      // window.alert("Registraion Succesful. Your Ticket PNR is: " + booking.bookingId)
      this.bookingIDsave = bookingDetails.bookingId;},
    error => {window.alert("Enter Correct Details")
   } );
  }
}
