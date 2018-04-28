import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationProvider {

  private url ='http://vps137395.vps.ovh.ca/fishbite/public/api/';
  
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

   editProfile(user_id, fullname, username, countryName, fishingMethod_Id, gender, mail, dob, lat, lng) {    // For edit thr profile of user
     let data = new FormData();
         data.append('user_id',user_id)
         data.append('fullname',fullname)
         data.append('username',username)
         data.append('country',countryName)
         data.append('fishingmethod',fishingMethod_Id)
         data.append('email',mail)
         data.append('about','')
         data.append('gender',gender)
         data.append('birthday',dob)
         data.append('lat',lat)
         data.append('lng',lng)

     return this.http.post(`${this.url}user/editProfile`,data);
   }
}
