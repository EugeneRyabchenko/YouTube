import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Video } from 'src/app/models/video';
import { VideoService } from 'src/app/services/video-service';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.css']
})
export class VideoDetailsComponent implements OnInit {

    public video: Video
  
  constructor(private activatedRoute: ActivatedRoute, private videoService: VideoService) { }

  ngOnInit(): void {
      const videoId = +this.activatedRoute.snapshot.paramMap.get("id")
    
      this.video = this.videoService.getVideoById(videoId)
  }   

  

}
