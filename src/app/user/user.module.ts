import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule,UserRoutingCompounents } from './user-routing.module';

import { ReactiveFormsModule,FormsModule } from "@angular/forms";
import { ContactComponent } from './contact/contact.component';
import { OffersComponent } from './offers/offers.component';
import { ServicedetailsComponent } from './servicedetails/servicedetails.component';
import { CancelticketComponent } from './cancelticket/cancelticket.component';
import { DataTablesModule } from 'angular-datatables';
import { BookingpagesComponent } from './bookingpages/bookingpages.component';


@NgModule({
  declarations: [
    UserRoutingCompounents,
    ContactComponent,
    OffersComponent,
    ServicedetailsComponent,
    CancelticketComponent,
    BookingpagesComponent
  ],
  imports: [
    CommonModule,UserRoutingModule,ReactiveFormsModule,FormsModule,DataTablesModule
  ]
  
})
export class UserModule { }