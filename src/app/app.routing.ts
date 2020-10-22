import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TipTour } from './components/tipTour/tipTour.component';
import { IndividualTour } from './components/individualTour/individualTour.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes =[
    { path: '',             component: HomeComponent },
    { path: 'signup',           component: SignupComponent },
    { path: 'tipTour',          component: TipTour},
    { path: 'individualTour',  component: IndividualTour},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [],
})

export class AppRoutingModule { }