import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RegistrationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RegistrationProvider {

  private url='http://192.168.200.4/fishbite/api/user/signup?';
  constructor(public http: HttpClient) {
    console.log('Hello RegistrationProvider Provider');
  }
    // personalRegistration(language,country,name,add,email,tel,fnEmail,fnMob,bnEmail,bnMob) {
    personalRegistration(perReg) {
      // return this.http.get(this.url+'language='+language+'&'+'country='+country+'&'+'name='+name+'&'+'address='+add+'&'+'email='+email+'&'+'tel='+tel+'&'+'fnEmail='+fnEmail+'&'+'fnMob='+fnMob+'&'+'bnEmail='+bnEmail+'&'+'bnMob='+bnMob);
      return this.http.get(this.url+'perReg='+perReg);
    }
    
}
