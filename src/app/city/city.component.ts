import { Component, OnInit } from '@angular/core';
import {CityService} from '../services/city.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
  
})
export class CityComponent implements OnInit {
  location = {
    city:  'london',
    code : 'uk'
  };
  weather:any;
  value:any;
  constructor(private cityService: CityService) {  }
  ngOnInit() 
  {
    this.value = localStorage.getItem('location');
      if (this.value!=null)
      {
        this.location=JSON.parse(this.value);
      }
      else 
      {
        this.location={
          city:'london',
          code:'uk'
      }
    }
    this.cityService.getWeather(this.location.city, this.location.code).subscribe(
      response => {
        console.log(response);
        this.weather=response;
      }
    );
  }


}

