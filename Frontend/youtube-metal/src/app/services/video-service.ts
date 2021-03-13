import { Injectable } from "@angular/core";
import { Video } from "../models/video";

@Injectable()
export class VideoService{

    private videos: Video[] = [
        {id: 1, name: "Thru Our Scars",
        description: `This song and the band's logo are the copyrighted property of their owner(s).
        🎵 Fleshgod Apocalypse's "Thru Our Scars" playthrough by Eugene Ryabchenko (Banisher, Castrum, Fleshgod Apocalypse, Locracy).`,
        thumbnailURL: "assets/ThruOurScarsTH.jpg"},
        {id: 2, name: "PlayStation 1 Medley",
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
        thumbnailURL: "assets/PS1MedleyTH.jpg"},
        {id: 3, name: "Hintertux Vacation", description:
        `Places we visited:
        
        ✅ Jenbach / Rofan Seilbahn
        ✅ Olpererhütte
        ✅ Schlegeis Stausee
        ✅ Hintertuxer Gletscher
        ✅ Mayrhofen / Penkenbahn`,
        thumbnailURL: "assets/HintertuxVacationMedleyTH.jpg"},
        {id: 4, name: "Electric Heresy", description: `Song composed by Peter Ryabchenko.
        Drum performance by Eugene Ryabchenko.
        Recording and mixig by Eugene and Peter Ryabchenko.`,
        thumbnailURL: "assets/ElectricHeresyTH.jpg"},
        {id: 5, name: "Post Organic", description: `RIP VITEK`,
        thumbnailURL: "assets/PostOrganicTH.jpg"}
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
