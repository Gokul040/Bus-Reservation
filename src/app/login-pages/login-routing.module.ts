import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { RegistrationloginComponent } from './registrationlogin/registrationlogin.component';
import { SigninpageComponent } from './signinpage/signinpage.component';

const appRoutes: Routes = [
  { path: 'adminlogin', component: AdminloginComponent},
  { path: 'registration', component: RegistrationloginComponent },
  { path: 'signin', component: SigninpageComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
export const Loginpages = [AdminloginComponent,RegistrationloginComponent,SigninpageComponent]
