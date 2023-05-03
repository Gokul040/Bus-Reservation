import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { NetworkCallService } from '../ServiceFolder/NetworkCall.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BookingRegister } from '../model/booking-register';
import { BusDetailsFetching } from '../model/busdetail-fetching';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {
 
}
