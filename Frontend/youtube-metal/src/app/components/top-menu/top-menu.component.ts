import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Subscription } from "rxjs";
import { Video } from 'src/app/models/video';
import { User } from "src/app/models/user";
import { UserStore } from "src/app/stores/user-store";
import { UserRegistrationComponent } from "../user-registration/user-registration.component";
import { PrivilegesModal } from '../privileges-modal.component/privileges-modal.component';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})

export class TopMenu implements OnInit, OnDestroy {

  public user: User
  public admin: User
  private subscription: Subscription = new Subscription()
  
  @Input()
  public newVideoIdURL: number

  constructor(private modalService: NgbModal, private userStore: UserStore, private router: Router) {

  }

  ngOnInit(): void {
    this.subscription.add(
      this.userStore.user$.subscribe(
        (u: User) => { this.user = u }
      )
    )

    this.admin = new User("Ivan", "Wolf", "Sekiro42069")

  }

  

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  public editAccount() {
    const modalRef = this.modalService.open(UserRegistrationComponent)
  }

  public onClickAddVideo(): void {
    if (this.user
      && this.admin.firstName === this.user.firstName
      && this.admin.lastName === this.user.lastName
      && this.admin.userName === this.user.userName
    ) {
      this.router.navigate(['videos/new'])
    }
    else {
      const modalRef = this.modalService.open(PrivilegesModal)
    }
  }
}

