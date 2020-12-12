import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Video } from 'src/app/models/video';

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

  constructor() { }

  ngOnInit(): void {

    this.videos = [
      {id: 1, name: "asd"},
      {id: 2, name: "wtf"},
      {id: 3, name: "lol"},
      {id: 4, name: "brb"},
    {id: 5, name: "Mickey can't choose between his friend and his country"}
    ]
  }


 // public onClickButton(): void {
 //   console.log(this.videos)
 // }

  public onClick(id: number): void{
    console.log(id)
  }

  

}
