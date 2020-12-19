export class User{

    constructor(public firstName: string, public lastName: string, public userName: string){

    }

    public getFullName(): string {
        return this.firstName +" "+ this.lastName +" a.k.a "+ this.userName
    }
}