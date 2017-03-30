import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { GoogleapiService } from '../googleapi.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  currPropSortedBy: string = "cost";
  reverseProp: boolean = true;
  query: string;
  results;

  constructor(private googleapi: GoogleapiService, private router: Router, private route: ActivatedRoute) {
    this.route
        .queryParams
        .subscribe(params => {this.query = params['query'] || ''})
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    console.log('query', this.query);
    if(!this.query) {
      return;
    }

    this.googleapi
        .search(this.query)
        .subscribe((res: any) => {
          console.log(res.results);
          this.results = res.results.slice(0, 5);
          //get images of hotels from image references
          this.getImages();
          //add random price tags to hotels
          this.addPriceTag();
          //sort by price default
          this.sortBy(this.currPropSortedBy, null);
        });
  }

  getImages(): void {
    for(let result in this.results) {
      if(this.results[result].hasOwnProperty("photos")){
          this.googleapi
            .getImage(this.results[result].photos[0].photo_reference)
            .subscribe((res: any) => {
              this.results[result].imageUrl = res;
            })
      } 
    }
  }

  addPriceTag(): void {
    let priceTag: number;
    let maximumPrice: number = 10000;
    let minimumPrice: number = 3000;
    
    for(let result in this.results) {
      priceTag = Math.round(Math.random() * (maximumPrice - minimumPrice - 1)) + minimumPrice;
      this.results[result].cost = priceTag;
    }
  }

  sortBy(property, reverse): void {

    if(property == ""){
      property = this.currPropSortedBy;
    } 
    else {
      this.currPropSortedBy = property;
    }  

    if(reverse == null) {
      reverse = this.reverseProp;
    }
    else {
      this.reverseProp = reverse; 
    }  
      
    this.results = this.results.sort(function(a, b){
      if(!reverse)
        return a[property] - b[property];
      else
        return b[property] - a[property];  
    })
  }

  test(event: Event) {
    console.log(event);
  }

}
