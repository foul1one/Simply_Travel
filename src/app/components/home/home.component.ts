import { Component, OnInit, Renderer2 } from '@angular/core';
import { AppService } from 'app/app.service';
import { fadeIn, slideFadeIn, fadeOut } from 'app/animations';

@Component({
    selector: 'home-components',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    animations:[
        fadeIn('-wrapper', 200, 600),
        slideFadeIn('-about', 600, 700,'0','100%')
    ]
})

export class HomeComponent implements OnInit {

    constructor( private renderer : Renderer2, private appService: AppService) {}

    ngOnInit() {
        this.appService.notHome(false)
    }

}
