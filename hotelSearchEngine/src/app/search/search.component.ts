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
  results: Object;

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
          this.results = res.results;
        });
  }

}
