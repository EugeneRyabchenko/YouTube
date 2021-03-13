import { Component, OnDestroy, OnInit } from "@angular/core";
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from "rxjs";
import { User } from "src/app/models/user";
import { UserStore } from "src/app/stores/user-store";
import { UserRegistrationComponent } from "../user-registration/user-registration.component";

@Component({
    selector: 'app-top-menu',
    templateUrl: './top-menu.component.html',
    styleUrls: ['./top-menu.component.css']
  })

  export class TopMenu implements OnInit, OnDestroy{
  
    public user: User
    private subscription: Subscription = new Subscription()

    constructor(private modalService: NgbModal, private userStore: UserStore){

    }

    ngOnInit(): void {
         this.subscription.add(
           this.userStore.user$.subscribe(
             (user) => { this.user = user}
          )
         )
    }

      ngOnDestroy(): void{
        this.subscription.unsubscribe()
      }

    public editAccount(){
        const modalRef = this.modalService.open(UserRegistrationComponent)
    }
}

  