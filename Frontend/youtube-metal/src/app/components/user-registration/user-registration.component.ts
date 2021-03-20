import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/user';
import { UserStore } from 'src/app/stores/user-store';



@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

   public firstName: string
   public lastName: string
   public userName: string

  constructor(private userStore: UserStore, private activeModal: NgbActiveModal) {
  }

  ngOnInit(): void {

  }
  

  public onSave(){
      console.log("onSave", this.userName, this.firstName, this.lastName)
      const user: User = new User(this.firstName, this.lastName, this.userName)
      this.userStore.setUser(user)
      this.activeModal.close()
  }
  

}
