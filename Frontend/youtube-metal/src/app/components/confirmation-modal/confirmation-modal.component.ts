import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from "@angular/core";
import { Router } from "@angular/router";
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.css']
})

export class ConfirmationModal implements OnInit {


  @Output() public clickConfirm: EventEmitter<void> = new EventEmitter<void>()

  constructor(private activeModal: NgbActiveModal, private router: Router) {

  }
  ngOnInit(): void {
  }

  public onClose() {
    console.log("EVERYTHING OK")

    this.activeModal.close()
  }
  public onConfirm() {
    console.log("EVERYTHING OK")
    this.clickConfirm.emit()
    this.activeModal.close()
  }

}


