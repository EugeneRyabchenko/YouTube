import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-privileges-modal',
  templateUrl: './privileges-modal.component.html',
  styleUrls: ['./privileges-modal.component.css']
})

export class PrivilegesModal implements OnInit {


  @Output() public clickConfirm: EventEmitter<void> = new EventEmitter<void>()

  constructor(private activeModal: NgbActiveModal, private router: Router) {

  }
  ngOnInit(): void {
  }

  public onClose() {
    console.log("EVERYTHING OK")

    this.activeModal.close()
  }

}


