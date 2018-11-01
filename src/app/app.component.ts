import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  data;
  jsonData: any[];

  active_cryptocurrencies;
  active_markets;
  bitcoin_percentage_of_market_cap;
  total_market_cap;
  total_volume_24h;
  last_updated;
  timestamp;
  error;

  private url = 'https://api.coinmarketcap.com/v2/global/';

  constructor(private http: Http) {
    http.get(this.url).subscribe(response =>{ 
      this.jsonData= response.json().data;
      
      this.active_cryptocurrencies=response.json().data.active_cryptocurrencies;
      this.active_markets=response.json().data.active_markets;
      this.bitcoin_percentage_of_market_cap=response.json().data.bitcoin_percentage_of_market_cap;
      this.total_market_cap=response.json().data.quotes.USD.total_market_cap;
      this.total_volume_24h=response.json().data.quotes.USD.total_volume_24h;
      this.last_updated=response.json().data.last_updated;
      this.timestamp=response.json().metadata.timestamp;
      this.error=response.json().metadata.error;

    });
 
  }
}
