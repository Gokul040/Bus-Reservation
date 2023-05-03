import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule, Loginpages } from './login-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [Loginpages],
  imports: [
    CommonModule,LoginRoutingModule,FormsModule,ReactiveFormsModule
  ]
})
export class LoginModule { }
