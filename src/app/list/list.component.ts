import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  brews: Object;
  
  constructor(private _http: HttpService) { }

  ngOnInit() {
    // The service returns an observable, which means we can subscribe to it 
    // within the component. In the return, we can pass the data to our brews object.
    this._http.getBeer().subscribe(data => {
      this.brews = data;
      console.log(this.brews);
    });
  }

}
