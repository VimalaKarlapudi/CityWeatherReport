import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class CityService {

  apiKey= 'a5a1f421ffca6eb0abec97ee0cc4a8c5';

  url;
  constructor(public http: Http) {
    this.url = 'http://api.openweathermap.org/data/2.5/forecast?q=';

  }


  getWeather(city, code) {
    return this.http.get(this.url + city + ',' + code + '&APPID=' + this.apiKey)
    .map( res => res.json());

  }


}