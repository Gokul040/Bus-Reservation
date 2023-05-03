import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingpagesComponent } from './bookingpages/bookingpages.component';
import { TicketinformationComponent } from './ticketinformation/ticketinformation.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { ContactComponent } from './contact/contact.component';
import { OffersComponent } from './offers/offers.component';
import { ServicedetailsComponent } from './servicedetails/servicedetails.component';
import { CancelticketComponent } from './cancelticket/cancelticket.component';

const routes: Routes = [
  {path: 'userhome', component:UserhomeComponent},
  {path:'bookingpage',component:BookingpagesComponent},
  {path:'ticketinfo',component:TicketinformationComponent },
  {path:'contact',component: ContactComponent},
  {path:'offers',component: OffersComponent},
  {path:'servicepage',component: ServicedetailsComponent},
  {path:'cancelticket',component: CancelticketComponent},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class UserRoutingModule { } 
export const UserRoutingCompounents = [UserhomeComponent,TicketinformationComponent,BookingpagesComponent,ContactComponent,OffersComponent,ServicedetailsComponent];
