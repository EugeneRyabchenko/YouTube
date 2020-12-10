import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public textVariable: string = 'Hello'

 public textCondition: boolean = false
      
 public ayanamiArray: string[] = ['Shinji', 'Summer holidays', 'Gando\'s approval']

 public now: Date = new Date()

 public onClickButton(event: any): void {
   this.now = new Date()
   console.log(this.now)
 }
}
