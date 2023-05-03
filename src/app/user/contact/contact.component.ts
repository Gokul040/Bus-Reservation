import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { NetworkCallService } from 'src/app/ServiceFolder/NetworkCall.service';
import { queryModel } from 'src/app/model/query-model/query-model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  
selectedQuery: queryModel=new queryModel();


  queryModel: any;
  Querystatus: boolean = false;
  queryID: any;
  errormessage: boolean = false;

  contactform = new FormGroup({
    username: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*'),Validators.maxLength(16)]),
    useremail: new FormControl('',[Validators.required,Validators.email]),
    message: new FormControl('',[Validators.required,]),
  })

constructor(private getservice: NetworkCallService){
 
}


get username(){
return this.contactform.get('username');
}
get useremail(){
return this.contactform.get('useremail');
}
get message(){
return this.contactform.get('message');
}


saveQuery():void{

  this.getservice.createQuery(this.selectedQuery).subscribe(( querymodel:queryModel) => {this.queryModel.queryNo = querymodel.queryNo;
   
    console.log(this.Querystatus)
    // window.alert("Registraion Succesful. Your Ticket PNR is: " + booking.bookingId)
    this.queryID = querymodel.queryNo;},
    error => 
{
  this.errormessage = true;
  console.log(this.errormessage)
 }); 
 
 this.Querystatus = true; 
}
}
