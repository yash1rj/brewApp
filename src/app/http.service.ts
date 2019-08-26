import { Injectable } from '@angular/core';
// We need to integrate the HTTP client within our http service, 
// which will allow us to communicate with a public API.
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  // create a custom method that other components can access
  constructor(private http: HttpClient) { }

  getBeer() {
    return this.http.get('https://api.openbrewerydb.org/breweries')
  }
}
