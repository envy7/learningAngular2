import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { YoutubeSearchComponent } from './youtube-search/youtube-search.component';
import { youTubeServiceInjectables } from './youtube-search/youtube-search.component';
import { SearchBoxComponent } from './search-box/search-box.component'

@NgModule({
  declarations: [
    AppComponent,
    YoutubeSearchComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    youTubeServiceInjectables
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
