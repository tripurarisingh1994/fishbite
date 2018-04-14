import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CalendarWeatherProvider {

  constructor(public http: HttpClient) {
    console.log('Hello CalendarWeatherProvider Provider');
  }
  getWeather(lat, lng, time = Math.floor(new Date().getTime()/1000))
  {
    let url = "https://api.darksky.net/forecast/14f1bf883bcfdee9fc15c222f2f3b22f/" + lat + "," + lng+"," + time;
    return this.http.get(url)
  }

}
