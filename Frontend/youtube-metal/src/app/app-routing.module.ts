import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProgrammingTraining } from './components/programming-training.component/programming-training.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { EmptyComponent } from './components/util/empty/empty.component';
import { VideoDetailsComponent } from './components/video-details/video-details.component';
import { VideosComponent } from './components/videos/videos.component';

const routes: Routes = [
  { path: 'empty', component: EmptyComponent},
  { path: '', component: HomeComponent, 
    children: [
      { path: 'videos', component: VideosComponent },
      { path: 'videos/new', component: VideoDetailsComponent},
      { path: 'videos/:id', component: VideoDetailsComponent},
      { path: 'user-registration', component: UserRegistrationComponent},
      { path: 'training', component: ProgrammingTraining},
      { path: '**', redirectTo: 'videos'}
      
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
