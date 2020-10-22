import { Component, OnInit } from '@angular/core';
import { AppService } from 'app/app.service';
import { fadeIn } from 'app/animations';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [
        fadeIn('-wrapper', 200, 600),
    ]
})
export class SignupComponent implements OnInit {
    
    constructor(private appService: AppService) { }

    ngOnInit() {
        this.appService.notHome(true)
    }

    click(){
        console.log("Пользователь нажал кнопку");
    }
}
