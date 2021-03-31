import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Video } from 'src/app/models/video';
import { VideoService } from 'src/app/services/video-service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ConfirmationModal } from '../confirmation-modal/confirmation-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit, OnDestroy {



  public video: Video
  public sanatizedUrl: SafeResourceUrl;
  public editedTitle: string
  public editedDescription: string
  private subscription: Subscription = new Subscription()
  public isNew: boolean

  constructor(private modalService: NgbModal, private router: Router, private activatedRoute: ActivatedRoute, private videoService: VideoService) { }


  ngOnInit(): void {
    const videoId = +this.activatedRoute.snapshot.paramMap.get("id")
    this.isNew = !videoId

    if (!this.isNew) {
      this.subscription.add(
        this.videoService.getVideoById(videoId).subscribe(
          (v) => {
            this.video = v
            this.editedTitle = v.title
            this.editedDescription = v.description
          }
        )
      )
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }


  public onClickBack(): void {
    this.router.navigate(['videos/'])
  }

  public onClickSave(): void {
    const modalRef = this.modalService.open(ConfirmationModal)
    modalRef.componentInstance.clickConfirm.subscribe(
      () => {
        const newVideo: Video = {
          id: this.video?.id,
          title: this.editedTitle,
          description: this.editedDescription,
          thumbnailURL: this.video?.thumbnailURL,
          link: this.video?.link
        }
        if (!this.isNew) {
          const video$ = this.videoService.setVideoHttp(newVideo)
          video$.subscribe((v: Video) => console.log("confirmed! " + v))
        } else {
          const video$ = this.videoService.createVideoHttp(newVideo)
          video$.subscribe((v: Video) => console.log("new video created: " + v))
        }
        this.router.navigate(['videos/'])

      }
    )

  }
}
