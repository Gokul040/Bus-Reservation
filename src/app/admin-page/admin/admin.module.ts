import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingCompounents, AdminRoutingModule } from './admin-routing.module';
import { AdminPageComponent } from '../admin-page.component';
import { DataTablesModule } from 'angular-datatables';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidebarModule } from 'ng-cdbangular';
import { BusdetailsadminpageComponent } from '../busdetailsadminpage/busdetailsadminpage.component';
import { Routes, RouterModule } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { BookingdetailsComponent } from '../bookingdetails/bookingdetails.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserqueriesComponent } from '../userqueries/userqueries.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
  {path: 'admindashboard', component:AdminPageComponent,
  children: [{path: 'busupdate', component:BusdetailsadminpageComponent},{path: 'bookingupdate', component:BookingdetailsComponent},
  {path: 'userqueries', component:UserqueriesComponent}, {path: 'dashboard', component:DashboardComponent},

]}, 
]
@NgModule({
  declarations: [
    AdminPageComponent,
    AdminRoutingCompounents,BusdetailsadminpageComponent,BookingdetailsComponent,UserqueriesComponent,DashboardComponent
  ],
  imports: [
    CommonModule,AdminRoutingModule,DataTablesModule,BrowserAnimationsModule,NoopAnimationsModule,MatSidenavModule,
    SidebarModule,RouterModule.forRoot(routes),MatSlideToggleModule,MatToolbarModule,MatIconModule,MatListModule,FormsModule,ReactiveFormsModule
  ]
})
export class AdminModule { }
