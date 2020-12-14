import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Video } from 'src/app/models/video';
import { VideoService } from 'src/app/services/video-service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

    @Input()
    public evaItem: string = "I have no value yet"

    @Output()
    public clickEvaItem: EventEmitter<string> = new EventEmitter<string>() 

    public videos: Video[]

  constructor(private router: Router, private videoService: VideoService) {
  }

  ngOnInit(): void {

    this.videos = this.videoService.getVideos()

    this.videos.forEach(v => console.log("fag ", v))

  }


 // public onClickButton(): void {
 //   console.log(this.videos)
 // }

  public onClick(id: number): void{
    console.log(id)
    this.router.navigate(['videos/'+id])
  }

  

}
