import { Component, OnInit } from '@angular/core';
import { NetworkCallService } from 'src/app/ServiceFolder/NetworkCall.service';

@Component({
  selector: 'app-userqueries',
  templateUrl: './userqueries.component.html',
  styleUrls: ['./userqueries.component.css']
})
export class UserqueriesComponent implements OnInit {


  query:any;

  constructor(private getService: NetworkCallService) {

  }

  ngOnInit(): void {
  
    this.getQuery();
  }

  getQuery() {
    this.getService.getAllQueries().subscribe((query: any) => {
      console.log(query)
      this.query = query;
    });
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  deleteQuery(id:any){
    this.getService.deleteQueryById(id).subscribe();
    this.getService.getAllQueries().subscribe((querydata: any) => {
    this.query = querydata;
    
    });
  }

}
