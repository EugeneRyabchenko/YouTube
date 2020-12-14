import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { VideoDetailsComponent } from './components/video-details/video-details.component';
import { VideosComponent } from './components/videos/videos.component';

const routes: Routes = [
  { path: 'videos', component: VideosComponent },
  { path: 'videos/:id', component: VideoDetailsComponent},
  { path: '**', redirectTo: 'videos'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
