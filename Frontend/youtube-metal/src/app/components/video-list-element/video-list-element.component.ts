import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Video } from '../../models/video';

@Component({
  selector: 'app-video-list-element',
  templateUrl: './video-list-element.component.html',
  styleUrls: ['./video-list-element.component.css']
})
export class VideoListElementComponent implements OnInit {

  @Input() video: Video;

  @Output()
    public clickVideoItem: EventEmitter<number> = new EventEmitter<number>() 

  constructor() { }

  ngOnInit(): void {
  }

  public onClickButton(): void {
    //   console.log(this.video)
       this.clickVideoItem.emit(this.video.id)
     }

}
