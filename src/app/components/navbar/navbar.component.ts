import { Component, OnInit, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AppService } from 'app/app.service';
import { slideFadeIn, fadeIn, fadeOut } from 'app/animations';


@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    animations:[
        slideFadeIn('-nav-bar', 600, 700, '0','-100%'),
        fadeIn('-goMain', 100, 500),
        fadeOut('-goMain', 100, 500)
    ]
})
export class NavbarComponent implements OnInit {
    
    private toggleButton: any;
    private sidebarVisible: boolean;

    constructor(public location: Location, private element : ElementRef, private router: Router, private appService: AppService) {}

    ngOnInit() {
    const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];

        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');

        this.sidebarVisible = true;
    }

    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    }

    sidebarToggle() {
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    }

    isDocumentation() {
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === '#'){
          titlee = titlee.slice( 1 );
      }
        if( titlee === '/documentation' ) {
            return true;
        }
        else {
            return false;
        }
    }
    
    signupLink() {
        this.router.navigate(['/signup'])
    }
}
