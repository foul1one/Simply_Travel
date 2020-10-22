import { Component, OnInit } from "@angular/core";
import { AppService } from "app/app.service";
import { fadeIn } from "app/animations";

@Component({
    selector: 'tipTour-app',
    templateUrl: './tipTour.component.html',
    styleUrls: ['./tipTour.component.scss'],
    animations: [
        fadeIn('-wrapper', 200, 600),
    ]

})

export class TipTour implements OnInit {

    constructor(private appService: AppService) {}

    ngOnInit() {
        this.appService.notHome(true)
    }

}