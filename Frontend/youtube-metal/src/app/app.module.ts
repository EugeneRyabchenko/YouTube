import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VideosComponent } from './components/videos/videos.component';
import { VideoListElementComponent } from './components/video-list-element/video-list-element.component';
import { VideoDetailsComponent } from './components/video-details/video-details.component';
import { VideoService } from './services/video-service';

@NgModule({
  declarations: [
    AppComponent,
    VideosComponent,
    VideoListElementComponent,
    VideoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
