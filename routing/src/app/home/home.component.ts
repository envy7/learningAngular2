import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  id: string;

  constructor(private route: ActivatedRoute){
  	route.params.subscribe(params => {this.id = params['id']})
  	console.log(this.id);
  }

}
