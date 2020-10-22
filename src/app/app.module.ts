import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { TipTour } from './components/tipTour/tipTour.component';
import { IndividualTour } from './components/individualTour/individualTour.component';
import { CommonModule } from '@angular/common';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TipTour,
    IndividualTour
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    CommonModule,
    NouisliderModule,
    RouterModule,
    JwBootstrapSwitchNg2Module,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [],
  exports:[ HomeComponent ]
})

export class AppModule { }
