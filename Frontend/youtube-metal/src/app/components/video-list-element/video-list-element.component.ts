import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Video } from '../../models/video';
import { VideoPreviewComponent } from '../video-preview/video-preview.component';

@Component({
  selector: 'app-video-list-element',
  templateUrl: './video-list-element.component.html',
  styleUrls: ['./video-list-element.component.css']
})
export class VideoListElementComponent implements OnInit {

  @Input() video: Video;

  @Output()
  public clickVideoItemEdit: EventEmitter<number> = new EventEmitter<number>()
  public clickVideoItemThumb: EventEmitter<string> = new EventEmitter<string>()
  @Output()
  public clickVideoItemDelete: EventEmitter<number> = new EventEmitter<number>()
  private currentLink: string

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  public onClickButtonEdit(): void {
    this.clickVideoItemEdit.emit(this.video.id)
    console.log(this.video.id)
  }

    public onClickButtonThumb(): void{
      const modalRef = this.modalService.open(VideoPreviewComponent)
      const inst: VideoPreviewComponent = modalRef.componentInstance
      console.log(this.video.id, this.video.link)
     inst.video = this.video
  //   window.open(this.video.link);
   }

   public getCurrentLink(): String
   {
     return this.currentLink
   }

   public onClickButtonDelete(): void {
    this.clickVideoItemDelete.emit(this.video.id)
    console.log(this.video.id)
   }
   
}