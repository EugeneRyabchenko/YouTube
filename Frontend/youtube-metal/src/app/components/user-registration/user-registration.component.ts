import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs/internal/Subscription';
import { User } from 'src/app/models/user';
import { UserStore } from 'src/app/stores/user-store';



@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit, OnDestroy {

  public firstName: string
  public lastName: string
  public userName: string
  public user: User
  private subscription: Subscription = new Subscription()

  constructor(private userStore: UserStore, private activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {
    this.subscription.add(
      this.userStore.user$.subscribe(
        (user) => {
          if (user) {
            this.user = user,
              this.firstName = this.user.firstName,
              this.lastName = this.user.lastName,
              this.userName = this.user.userName
          }
        }
      )
    )
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  public onSave() {
    console.log("onSave", this.userName, this.firstName, this.lastName)
    const user: User = new User(this.firstName, this.lastName, this.userName)
    this.userStore.setUser(user)
    this.activeModal.close()
  }

  public onHack(){
      console.log("COMMANDER IKARI! THE MAGI HAS BEEN HACKED!")
      const user: User = new User("Ivan", "Wolf", "Sekiro42069")
      this.userStore.setUser(user)
  }

}
