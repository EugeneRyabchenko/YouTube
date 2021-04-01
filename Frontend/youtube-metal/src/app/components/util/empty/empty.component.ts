import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { RoutingService } from "src/app/services/routing-service";





@Component({
    selector: 'app-empty',
    templateUrl: './empty.component.html',
    styleUrls: ['./empty.component.css']
  })


  export class EmptyComponent implements OnInit {


  constructor(private router: Router, private routingService: RoutingService) {
}

ngOnInit(): void {

    const url = this.routingService.getUrlToReload()
    this.router.navigate([url || ''])


}


  }