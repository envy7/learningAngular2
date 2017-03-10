import { Component, OnInit, Injectable, Inject, EventEmitter, ElementRef} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-youtube-search',
  templateUrl: './youtube-search.component.html',
  styleUrls: ['./youtube-search.component.css']
})
export class YoutubeSearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export class SearchResult{
	id: string;
	title: string;
	description: string;
	thumbnailUrl: string;
	videoUrl: string;

	constructor(obj: any) {
		this.id    = obj && obj.id    || null;
		this.title = obj && obj.title || null;
		this.description = obj && obj.description || null;
		this.thumbnailUrl = obj && obj.thumbnailUrl || null;
		this.videoUrl = obj && obj.videoUrl || `https://www.youtube.com/watch?v=${this.id}`;
	}
}

let YOUTUBE_API_KEY: string = "AIzaSyAZKDSmmP_bLzjzYuOiwXrsgT9nGRvK5tk";
let YOUTUBE_API_URL: string = "https://www.googleapis.com/youtube/v3/search";


@Injectable()
export class YouTubeService {
	constructor(public http: Http,
		@Inject(YOUTUBE_API_KEY) private apiKey: string,
		@Inject(YOUTUBE_API_URL) private apiUrl: string) {
	}

	search(query: string): Observable<SearchResult[]> {
		let params: string = [
			`q=${query}`,
			`key=${this.apiKey}`,
			`part=snippet`,
			`type=video`,
			`maxResults=10`
		].join('&');

		let queryUrl: string = `${this.apiUrl}?${params}`;

		return this.http.get(queryUrl)
			.map((response: Response) => {
				return (<any> response.json()).items.map(item => {
					console.log("raw item", item);
					return new SearchResult({
						id: item.id.videoId,
						title: item.snippet.title,
						description: item.snippet.description,
						thumbnailUrl: item.snippet.thumbnails.high.url
					});
				});
			});
	}
}

export var youTubeServiceInjectables: Array<any> = [
	{provide: YouTubeService, useClass: YouTubeService},
	{provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY},
	{provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL}
];

//search box to display

@Component({
	outputs: ['loading', 'results'],
	selector: 'search-box',
	template: `
		<input type="text" class="form-control" placeholder="Search" autofocus>
	`
})

export class SearchBox implements OnInit {
	loading: EventEmitter<boolean> = new EventEmitter<boolean>();
	results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

	constructor(public youtube: YouTubeService, private el: ElementRef) {

	}

	ngOnInit() {
		Observable.fromEvent(this.el.nativeElement, 'keyup')
			.map((e: any) => e.target.value)
			.filter((text: string) => text.length > 1)
			.debounceTime(250)
			.do(() => this.loading.next(true))
			.map((query: string) => this.youtube.search(query))
			.switch()
			.subscribe(
				(results: SearchResult[]) => {
					this.loading.next(false);
					this.results.next(results);
				},
				(err: any) => {
					console.log(err);
					this.loading.next(false);
				},
				() => {
					this.loading.next(false);
				}
			);
	}
}