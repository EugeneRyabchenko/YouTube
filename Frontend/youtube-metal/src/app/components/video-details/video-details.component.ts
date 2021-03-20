import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Video } from 'src/app/models/video';
import { VideoService } from 'src/app/services/video-service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ConfirmationModal } from '../confirmation-modal/confirmation-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit {

  @Input() public video: Video
  public sanatizedUrl: SafeResourceUrl;
  public editedTitle: string
  public editedDescription: string

  constructor(private modalService: NgbModal, private router: Router, private activatedRoute: ActivatedRoute, private videoService: VideoService) { }


  ngOnInit(): void {
    const videoId = +this.activatedRoute.snapshot.paramMap.get("id")

    this.video = this.videoService.getVideoById(videoId)
    this.editedTitle = this.video.title 
    this.editedDescription = this.video.description 
  }

  public onClickBack(): void {
    this.router.navigate(['videos/'])
  }

  public onClickSave(): void {
    const modalRef = this.modalService.open(ConfirmationModal)
  modalRef.componentInstance.clickConfirm.subscribe(
    () => {
      const newVideo: Video = {
        id: this.video.id,
        title: this.editedTitle,
        description: this.editedDescription,
        thumbnailURL: this.video.thumbnailURL,
        link: this.video.link
      }
      this.videoService.updateVideo(newVideo)
      console.log("confirmed!")
        this.router.navigate(['videos/'])
    }
  )
  
  }
}
