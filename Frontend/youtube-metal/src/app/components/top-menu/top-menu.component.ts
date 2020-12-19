import { Component } from "@angular/core";
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from "src/app/models/user";
import { UserStore } from "src/app/stores/user-store";
import { UserRegistrationComponent } from "../user-registration/user-registration.component";

@Component({
    selector: 'app-top-menu',
    templateUrl: './top-menu.component.html',
    styleUrls: ['./top-menu.component.css']
  })

  export class TopMenu {
  
    public user: User

    constructor(private modalService: NgbModal, private userStore: UserStore){

    }

    ngOnInit(): void {
         this.userStore.user$.subscribe(
             (user) => { this.user = user}
         )
      }

    public editAccount(){
        const modalRef = this.modalService.open(UserRegistrationComponent)
    }
}

  