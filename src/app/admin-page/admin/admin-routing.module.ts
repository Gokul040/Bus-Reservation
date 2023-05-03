import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from '../admin-page.component';
import { BusdetailsadminpageComponent } from '../busdetailsadminpage/busdetailsadminpage.component';


const routes: Routes = [
  {path: 'admindashboard', component:AdminPageComponent}, 
{path: 'busupdate', component:BusdetailsadminpageComponent},
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AdminRoutingModule { }
export const AdminRoutingCompounents = [AdminPageComponent];
