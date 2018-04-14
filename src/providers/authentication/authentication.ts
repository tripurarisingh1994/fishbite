import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationProvider {

  private url ='http://192.168.200.6/fishbite/public/api/';
  
  constructor(public http: HttpClient) {
    console.log('Hello AuthenticationProvider Provider');
  }

   login(username,password) {
     console.log(username);
     console.log(password);

     let loginData = new FormData();
     loginData.append('username',username);
     loginData.append('password',password);

     return this.http.post(this.url+'user/login',loginData);
   }

   personalService(language,country,name,address,email,tel,password,lat,lang) {

    let personalReg = new FormData();
    personalReg.append('language',language);
    personalReg.append('country',country);
    personalReg.append('name',name);
    personalReg.append('address',address);
    personalReg.append('email',email);
    personalReg.append('tel',tel);
    personalReg.append('password',password);
    personalReg.append('lat',lat);
    personalReg.append('lang',lang);

    // console.log("personalReg "+personalReg)
    console.log(language)
    console.log(country)
    console.log(name)
    console.log(email)
    console.log(tel)
    console.log(password)
    console.log(lat)
    console.log(lang)

    return this.http.post(this.url+'user/personalregistration',personalReg);
   }

   getLatLang() {
     return this.http.get('http://ip-api.com/json');
   }


   forgotPassword(email) {
      let data = new FormData();
      data.append('email',email);
     return this.http.post(this.url+'checkuser',data);
   }

   gPlusAndFbLogin(email) {
     let data = new FormData();
     data.append("email",email);
     return this.http.post(this.url+'socialUser',data);
   }
}
