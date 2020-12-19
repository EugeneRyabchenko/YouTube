import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { User } from "../models/user";


@Injectable()
export class UserStore{

    private user$$: Subject<User>
    public user$: Observable<User>

    constructor(){
        this.user$$ = new BehaviorSubject<User>(undefined)
        this.user$ = this.user$$.asObservable()
    }

    public setUser(newUser: User): void{
        this.user$$.next(newUser)
    }
}