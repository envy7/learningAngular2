import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  data: Object;
  loading: boolean;

  constructor(public http: Http){

  }

  makeRequest(): void {
  	this.loading = true;
  	this.http.request('http://jsonplaceholder.typicode.com/posts/1')
  		.subscribe((res: Response) => {
  			this.data = res.json();
  			this.loading = false;
  		})
  }

}
