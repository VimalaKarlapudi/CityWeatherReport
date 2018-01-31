import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {Routes,RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { CityComponent } from './city/city.component';
import {CityService} from './services/city.service';
import { DisplayCityComponent } from './display-city/display-city.component';

var myRoutes:Routes=[
  {path:'search',component:CityComponent},
  {path:'home',component:DisplayCityComponent}
  
    ]


@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    DisplayCityComponent,
   
   
  ],
  imports: [
    BrowserModule,FormsModule,ReactiveFormsModule,HttpModule,RouterModule.forRoot(myRoutes)
  ],
  providers: [CityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
