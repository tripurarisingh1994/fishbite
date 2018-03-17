import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationProvider {

  private url ='http://192.168.200.7/fishbite/public/api/user/login';
  constructor(public http: HttpClient) {
    console.log('Hello AuthenticationProvider Provider');
  }

   login(username,password) {
     console.log(username);
     console.log(password);

     let loginData = new FormData();
     loginData.append('username',username);
     loginData.append('password',password);

     return this.http.post(this.url,loginData);
   }
}
