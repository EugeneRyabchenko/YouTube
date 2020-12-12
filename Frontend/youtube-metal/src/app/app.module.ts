import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VideosComponent } from './components/videos/videos.component';
import { VideoListElementComponent } from './components/video-list-element/video-list-element.component';

@NgModule({
  declarations: [
    AppComponent,
    VideosComponent,
    VideoListElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
