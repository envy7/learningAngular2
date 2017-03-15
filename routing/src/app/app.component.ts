import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  id: string;

  constructor(private route: ActivatedRoute){
  	route.params.subscribe(params => {this.id = params['id']})
  }
}

