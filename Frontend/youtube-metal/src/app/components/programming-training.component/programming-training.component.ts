import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { VideoService } from 'src/app/services/video-service';


@Component({
    selector: 'app-pragramming-training',
    templateUrl: './programming-training.component.html',
    styleUrls: ['./programming-training.component.css']
})
export class ProgrammingTraining implements OnInit {



    constructor(private router: Router, private videoService: VideoService) {
    }

    public y = 5

    ngOnInit(): void {
        //       this.masterFucntion(this.message1)
        //       this.masterFucntion(() => { console.log("message3"); return 6 })
        //       this.numberFunction(5)
        this.executeFor10(this.doublerFunction)
        this.executeFor10(this.squareFunction)
        this.executeFor10((input: number) => { return 3 * input })
    }

    message1(): number {
        console.log("message1")
        return 5
    }

    message2 = (): void => { console.log("message2") }

    masterFucntion(x: () => void): void {
        let five = x()
        console.log("five: " + five)
    }

    numberFunction(x: number): void {

    }

    squareFunction(input: number): number {
        return input * input
    }

    doublerFunction(input: number): number {
        return 2 * input
    }

    executeFor10(f: (x: number) => number): void {
        for (let i = 0; i < 10; i++) {
            let output = f(i)
            console.log(output)
        }
    }

    onGetVideoHttpClick(): void{
        this.videoService.getVideosHttp()
    }
}
