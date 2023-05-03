import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { error } from 'jquery';
import { Subject } from 'rxjs';
import { NetworkCallService } from 'src/app/ServiceFolder/NetworkCall.service';
import { BookingRegister } from 'src/app/model/booking-register';
import { BusDetailsFetching } from 'src/app/model/busdetail-fetching';


@Component({
  selector: 'app-busdetailsadminpage',
  templateUrl: './busdetailsadminpage.component.html',
  styleUrls: ['./busdetailsadminpage.component.css']
})
export class BusdetailsadminpageComponent implements OnInit{
  fromplace: any;
  toplace: any;
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject<any>();
  data!: BusDetailsFetching;
  BusData: any;
  FromSelect: any;
  bookingForm!: FormGroup;
  busDetailsNew: BusDetailsFetching = new BusDetailsFetching();
  minDate!: string;
  selectedBus: any;
  showBookingTable: boolean = false;
  bookingId!: number;
  updateStatus: boolean = false;
  BusStatus: boolean = false;
  busID?: number;
  newbusForm!: FormGroup;
  buttons?:any[];

  public updatebus = {
    busNo:'',
    busName:'',
    fromPlace:'',
    arrivalPlace:'',
    travelTime:'',
    busDate:'',
    busCoach:''
  }
 
  

  constructor(public fb: FormBuilder, private getService: NetworkCallService) {
    this.newbusForm = this.fb.group({
      busName: ['', [Validators.required,Validators.pattern('[a-zA-Z ]*'),Validators.maxLength(16)]],
      busCoach: ['', [Validators.required,Validators.pattern('[a-zA-Z ]*'),Validators.maxLength(16)]],
      fromPlace: ['', [Validators.required,Validators.pattern('[a-zA-Z ]*'),Validators.maxLength(16)]],
      arrivalPlace:['', [Validators.required,Validators.pattern('[a-zA-Z ]*'),Validators.maxLength(16)]],
      travelTime: ['', [Validators.required]],
      busDate: ['',[Validators.required]],
    });


    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = (today.getMonth() + 1).toString().padStart(2, '0');
    const dd = today.getDate().toString().padStart(2, '0');
    this.minDate = `${yyyy}-${mm}-${dd}`;
  }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'print'
    ]
    };
    this.getBusDetails();
  }

  getBusDetails() {
    this.getService.getAllBusDetails().subscribe(BusData => {
      console.log(BusData)
      this.BusData = BusData;
      this.dtTrigger.next(null);
    });
  }
  
  edit(busdata:any) {
    this.updatebus = busdata;
    console.log(busdata)
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
 
  updateBusDetails(){
    this.getService.updateBusDetails(this.updatebus).subscribe(( busDetails:BusDetailsFetching) => {
     },
    error => {
      this.updateStatus = true; 
   } );     
  }

  deleteBusDetails(id:any){
    this.getService.deleteBusDetailsById(id).subscribe();
    this.getService.getAllBusDetails().subscribe(BusData => {
      this.BusData = BusData;
    });
  }
  saveBusDetails():void{
    this.getService.createBusDetails(this.busDetailsNew).subscribe(( busDetails:BusDetailsFetching) => {
      this.busDetailsNew.busNo = busDetails.busNo;
      this.BusStatus = true; 
      // window.alert("Registraion Succesful. Your Ticket PNR is: " + booking.bookingId)
      this.busID = busDetails.busNo;},
    error => {window.alert("Enter Correct Details")
   } );     
  }

}
