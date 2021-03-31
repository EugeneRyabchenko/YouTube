import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs/internal/Subscription';
import { User } from "src/app/models/user";
import { Video } from 'src/app/models/video';
import { VideoService } from 'src/app/services/video-service';
import { UserStore } from 'src/app/stores/user-store';
import { PrivilegesModal } from '../privileges-modal.component/privileges-modal.component';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit, OnDestroy {

  public admin: User
  public user: User
  private subscription: Subscription = new Subscription()

  @Input()
  public evaItem: string = "I have no value yet"

  @Output()
  public clickEvaItem: EventEmitter<string> = new EventEmitter<string>()

 // public videos: Video[]
  public video: Video
  public videosFromHttp: Video[]
  public newVideoIdURL: number = 1

  constructor(private modalService: NgbModal, private router: Router, private videoService: VideoService, private userStore: UserStore) {
  }

  ngOnInit(): void {

    this.admin = new User("Ivan", "Wolf", "Sekiro42069")

   // this.videos = this.videoService.getVideos()

    this.subscription.add(
      this.userStore.user$.subscribe(
        (user) => { this.user = user }
      )
    )

    this.subscription.add(
      this.videoService.getVideosHttp().subscribe(
        (v) => {
          this.videosFromHttp = v,
          console.log ("videosFromHttp: " + v)
          console.log ("number of videos: " + this.videosFromHttp.length)
          this.newVideoIdURL = this.videosFromHttp.length + 1
          console.log ("new video id URL: " + this.newVideoIdURL)
        }
      )
    )

  
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  // public onClickButton(): void {
  //   console.log(this.videos)
  // }

  public onClickEdit(id: number): void {
    if (this.user
      && this.admin.firstName === this.user.firstName
      && this.admin.lastName === this.user.lastName
      && this.admin.userName === this.user.userName
    ) {
      this.router.navigate(['videos/' + id])
    }
    else {
      const modalRef = this.modalService.open(PrivilegesModal)
    }
  }

 // public largestVideoId(): number {
 //   const largestId: number = 0
 //   for (let i=0; i < this.videosFromHttp.length; i++){
//    if (largestId > this.video.id)

//    }
//    return largestId
//  }



}
