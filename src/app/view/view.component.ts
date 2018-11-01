import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Http } from '@angular/http';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  
  data;
  jsonData: any[];

  name;
  symbol; 
  website_slugl; 
  rank;
  circulating_supply;
  total_supply;
  max_supply;

  price;
  volume_24h;
  market_cap;
  percent_change_1h;
  percent_change_24h;
  percent_change_7d;

  last_updated;
  timestamp;
  error;

  private id: string;
  private url = "https://api.coinmarketcap.com/v2/ticker/";

  constructor(private route: ActivatedRoute, private http: Http) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.url = this.url + this.id + '/';
    http.get(this.url).subscribe(response =>{ 
      this.jsonData= response.json().data;
      
      this.name=response.json().data.name;
      this.symbol=response.json().data.symbol;
      this.website_slugl=response.json().data.website_slugl;
      this.rank=response.json().data.rank;
      this.circulating_supply=response.json().data.circulating_supply;
      this.total_supply=response.json().data.total_supply;
      this.max_supply=response.json().data.max_supply;

      this.price=response.json().data.quotes.USD.price;
      this.market_cap=response.json().data.quotes.USD.market_cap;
      this.volume_24h=response.json().data.quotes.USD.volume_24h;
      this.percent_change_1h=response.json().data.quotes.USD.percent_change_1h;
      this.percent_change_24h=response.json().data.quotes.USD.percent_change_24h;
      this.percent_change_7d=response.json().data.quotes.USD.percent_change_7d;

      this.last_updated=response.json().data.last_updated;
      this.timestamp=response.json().metadata.timestamp;
      this.error=response.json().metadata.error;

    });    
  } 
}
