import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FishSpeciesProvider {

  constructor(public http: HttpClient) {
    console.log('Hello FishSpeciesProvider Provider');
  }

  private url="http://vps137395.vps.ovh.ca/fishbite/public/api/";

  getFishSpeciesData() {

    return this.http.get(this.url+'allfishSpecies');
  }

}
