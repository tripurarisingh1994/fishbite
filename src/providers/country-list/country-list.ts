import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class CountryListProvider {

  private url ='http://vps137395.vps.ovh.ca/fishbite/public/api/country_list';
  constructor(public http: HttpClient) {
    console.log('Hello CountryListProvider Provider');
  }

  countryListService(){
    return this.http.get(this.url);
  }
}
