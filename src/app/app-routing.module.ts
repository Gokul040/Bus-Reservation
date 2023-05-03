import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPagesComponent } from './login-pages/login-pages.component';


const appRoutes: Routes = [
  { path: '',redirectTo:'/login',pathMatch:'full'},
  { path: 'login', component:LoginPagesComponent},
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes)]
})
export class AppRoutingModule { }
export const routingComponents  = [LoginPagesComponent]

