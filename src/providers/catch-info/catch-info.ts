import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CatchInfoProvider {

  private url = 'http://vps137395.vps.ovh.ca/fishbite/public/api/';

  public bait_id:number   = null;
  public bait_name:string = '';

  public species_id:number   = null;
  public species_name:string = '';

  public trip_id:number   = null;
  public trip_name:string = '';

  // public waterway_id:number   = null;
  // public waterway_name:string = '';


  public fishingMethods_Id = [] // It store the fishing id from fishing-methods page

  public countryName:string; // It store country name from countries page


  constructor(public http: HttpClient) {
    console.log('Hello CatchInfoProvider Provider');
  }


  getFishingMethods() { // fishing Method page and it is connected with edit profile on profile page
    return this.http.get(this.url+'fishMethod');
  }


}
