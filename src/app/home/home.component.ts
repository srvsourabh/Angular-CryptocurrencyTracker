import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  fullData:any[];
  gridData: any[];

  private url = 'https://api.coinmarketcap.com/v2/listings/';

  constructor(private http: Http, private router:Router) {
    http.get(this.url).subscribe(response =>{ 
      this.fullData= response.json().data;      
      this.gridData=this.fullData;
    });
  }
 
  fetch(id){
    this.router.navigate(['/view',id]);
  }

  filterList(val)
  { 
    if(val != "")   
    { 
      this.gridData = this.fullData.filter(({name}) => {
        let check = name as String;
        return check.toLowerCase().includes(val);
        });
    }
    else{
      this.gridData=this.fullData;
    }
  }
}
