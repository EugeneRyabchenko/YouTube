import { Component, Input, OnDestroy, OnInit, Sanitizer, SecurityContext } from "@angular/core";
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Video } from "src/app/models/video";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-preview',
  templateUrl: './video-preview.component.html',
  styleUrls: ['./video-preview.component.css']
})

export class VideoPreviewComponent implements OnInit {


  @Input() public video: Video;

  public sanatizedUrl: SafeResourceUrl;

  constructor(private activeModal: NgbActiveModal, private sanitizer: DomSanitizer) {

  }
  ngOnInit(): void {
      this.sanatizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.video.link)
  }

  public onClose() {
    console.log("EVERYTHING OK")

    this.activeModal.close()
  }


}


