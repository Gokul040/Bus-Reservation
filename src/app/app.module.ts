import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserModule } from './user/user.module';
import { Loginpages, LoginRoutingModule } from './login-pages/login-routing.module';
import { AppRoutingModule ,routingComponents} from './app-routing.module';
import { LoginModule } from './login-pages/login.module';
import { UserRoutingModule } from './user/user-routing.module';
import{HttpClientModule} from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { AdminModule } from './admin-page/admin/admin.module';
import { AdminRoutingModule } from './admin-page/admin/admin-routing.module';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {  SidebarModule } from 'ng-cdbangular';
import{MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { DashboardComponent } from './admin-page/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 
    ReactiveFormsModule,
    LoginRoutingModule,
    AppRoutingModule,LoginModule,UserModule,UserRoutingModule,HttpClientModule,DataTablesModule,AdminModule,AdminRoutingModule,
    NoopAnimationsModule,MatSidenavModule,SidebarModule,MatToolbarModule,MatIconModule,MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
