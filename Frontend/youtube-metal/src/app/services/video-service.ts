import { Injectable } from "@angular/core";
import { Video } from "../models/video";

@Injectable()
export class VideoService{

    private videos: Video[] = [
        {id: 1, name: "Thru Our Scars", thumbnailURL: "assets/ThruOurScarsTH.jpg"},
        {id: 2, name: "PlayStation 1 Medley", thumbnailURL: "assets/PS1MedleyTH.jpg"},
        {id: 3, name: "Hintertux Vacation", thumbnailURL: "assets/HintertuxVacationMedleyTH.jpg"},
        {id: 4, name: "Electric Heresy", thumbnailURL: "assets/ElectricHeresyTH.jpg"},
        {id: 5, name: "Post Organic", thumbnailURL: "assets/PostOrganicTH.jpg"}
      ]

      public getVideos(): Video[]{
          return this.videos
      }

      public getVideoById(id: number): Video {
        /*
        let result: Video
        
            for (let i=0; i<this.videos.length; i++){
                if(id === this.videos[i].id){
                    result = this.videos[i]
                }
            }
        return result
            */

        return this.videos.find((v: Video) => v.id === id);

      }
}
