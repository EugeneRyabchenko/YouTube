import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VideosComponent } from './components/videos/videos.component';
import { VideoListElementComponent } from './components/video-list-element/video-list-element.component';
import { VideoDetailsComponent } from './components/video-details/video-details.component';
import { VideoService } from './services/video-service';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { TopMenu } from './components/top-menu/top-menu.component';
import { UserStore } from './stores/user-store';
import { VideoPreviewComponent } from './components/video-preview/video-preview.component';
import { ConfirmationModal } from './components/confirmation-modal/confirmation-modal.component';
import { PrivilegesModal } from './components/privileges-modal.component/privileges-modal.component';
import { ProgrammingTraining } from './components/programming-training.component/programming-training.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConfirmationModal,
    PrivilegesModal,
    ProgrammingTraining,
    TopMenu,
    VideosComponent,
    VideoListElementComponent,
    VideoPreviewComponent,
    VideoDetailsComponent,
    UserRegistrationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [VideoService, UserStore],
  bootstrap: [AppComponent]
})
export class AppModule { }
