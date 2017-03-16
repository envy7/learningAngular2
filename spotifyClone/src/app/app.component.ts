import { Component } from '@angular/core';
import { SpotifyService } from './spotify.service'
import { SearchComponent } from './search/search.component'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
