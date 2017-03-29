import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { GoogleapiService } from '../googleapi.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
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
          this.getImages();
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

}
