import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LanguageListProvider {

  private url ='http://192.168.200.6/fishbite/public/api/language_list';
  constructor(public http: HttpClient) {
    console.log('Hello LanguageListProvider Provider');
  }


  languageListService() {
    return this.http.get(this.url);
  }
}
