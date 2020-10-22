import { Component, OnInit} from "@angular/core";
import { AppService } from "app/app.service";
import { fadeIn } from "app/animations";

@Component({
    selector: 'individualTour-app',
    templateUrl: './individualTour.component.html',
    styleUrls: ['./individualTour.component.scss'],
    animations: [
        fadeIn('-wrapper', 200, 600),
    ]

})

export class IndividualTour implements OnInit {

    pusto = "";

    constructor(private appService: AppService) {}


    ngOnInit() {
        this.appService.notHome(true) 
    } 

}