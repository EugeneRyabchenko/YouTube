import { ThrowStmt } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Video } from "../models/video";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable()
export class VideoService{

  public video: Video
public videosFromHttp: Video[]

    private videos: Video[] /*= [
        {id: 1, title: "Thru Our Scars",
        description: `This song and the band's logo are the copyrighted property of their owner(s).
🎵 Fleshgod Apocalypse's "Thru Our Scars" playthrough by Eugene Ryabchenko (Banisher, Castrum, Fleshgod Apocalypse, Locracy).`,
        thumbnailURL: "assets/ThruOurScarsTH.jpg",
        link: "https://www.youtube.com/embed/qAmqtmQwy2s?autoplay=1"},
        {id: 2, title: "PlayStation 1 Medley",
        description: `List of songs:
01 - PlayStation 1 Intro
02 - Tomb Raider II - Behind You!
03 - Warcraft 2 - Orc 2
04 - Warcraft 2 - Orc Victory
05 - Crash Bandicoot: Warped - Dr. Neo Cortex Theme
06 - Metal Gear Solid - Encounter
07 - Warzone 2100 - Future Warzone
08 - Tekken 3 - Jin Kazama Theme
09 - Gran Turismo - Manufacture Menu
10 - Alundra 2: A New Legend Begins - Imminent Crisis
11 - Parasite Eve II - Forbidden Power
12 - Command & Conquer  - Full Stop
13 - Resident Evil 3: Nemesis - Hellish Agony
14 - The Legend Of Dragoon - Hellena Prison
15 - Final Fantasy VII - Shinra Company`,
        thumbnailURL: "assets/PS1MedleyTH.jpg",
        link: "https://www.youtube.com/embed/Qd1ynTnX0v8?autoplay=1"},
        {id: 3, title: "Hintertux Vacation", description:
        `Since a lot of you have enjoyed my pics and videos from my recent alpine adventure - I decided to make a short video summing up all the wonderful and important moments from this trip.        
Places we visited:
        
✅ Jenbach / Rofan Seilbahn
✅ Olpererhütte
✅ Schlegeis Stausee
✅ Hintertuxer Gletscher
✅ Mayrhofen / Penkenbahn`,
        thumbnailURL: "assets/HintertuxVacationMedleyTH.jpg",
        link: "https://www.youtube.com/embed/ctwPQXZJddY?autoplay=1"},
        {id: 4, title: "Electric Heresy", description: `Song composed by Peter Ryabchenko.
Drum performance by Eugene Ryabchenko.
Recording and mixig by Eugene and Peter Ryabchenko.`,
        thumbnailURL: "assets/ElectricHeresyTH.jpg",
        link: "https://www.youtube.com/embed/5QwUASJ-_UI?autoplay=1"},
        {id: 5, title: "Post Organic", description: `RIP VITEK`,
        thumbnailURL: "assets/PostOrganicTH.jpg",
        link: "https://www.youtube.com/embed/bdcZJa0obuI?autoplay=1"}
      ]

*/

      constructor(private httpClient: HttpClient) {

      }

        public getVideosHttp(): Observable<Video[]> {       
            const response$ = this.httpClient.get("http://localhost:8080/api/v1/videos")

            const videos$: Observable<Video[]> = response$.pipe(
              map((jsonVideoArray: any[]) => {
                this.videosFromHttp = jsonVideoArray.map((jsonVideo: any) => Video.fromJson(jsonVideo))
                return this.videosFromHttp
              })
            )

            return videos$

        }

        public setVideoHttp(newVideo: Video): Observable<Video>{
          let v: any = Video.toJson(newVideo)
          const response$: Observable<Object> = this.httpClient.put("http://localhost:8080/api/v1/videos/"+newVideo.id, v)
     //     debugger
          const video$: Observable<Video> = response$.pipe(
            map((jsonVideo: any) => {
              const v = Video.fromJson(jsonVideo)
              return v
             })
           )
      return video$
        }


      public getVideos(): Video[]{
          return this.videosFromHttp
      }

      public getVideoById(id: number): Observable<Video> {
        const response$ = this.httpClient.get("http://localhost:8080/api/v1/videos/"+id)
      
        const video$: Observable<Video> = response$.pipe(
          map((jsonVideo: any) => {
            const v = Video.fromJson(jsonVideo)
            return v
          })
        )
          return video$
      }

/*      public getVideobyIdHttp(): Observable<Video[]> {       
        const response$ = this.httpClient.get("http://localhost:8080/api/v1/videos")

        const videos$: Observable<Video[]> = response$.pipe(
          map((jsonVideoArray: any[]) => {
            this.videosFromHttp = jsonVideoArray.map((jsonVideo: any) => Video.fromJson(jsonVideo))
            return this.videosFromHttp
          })
        )

        return videos$

    }*/


     // updateVideo method can update video title and description
  /*    public updateVideo(newVideo: Video): void {
              console.log(newVideo)
              for(let i=0; i<this.videosFromHttp.length; i++){
                if(newVideo.id === this.videosFromHttp[i].id){
                  this.videosFromHttp[i] = newVideo
                  console.log("front end update: " + this.videosFromHttp[i])
                }
                
              }
              
                }

  */   }
