import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { HttpHeaders } from '@angular/common/http';


// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json',
//     'Authorization': 'my-auth-token'
//   })
// };


@Injectable()
export class RegistrationProvider {

  // private url='http://192.168.200.4/fishbite/api/user/signup?';
     private url='http://babynames.net.in/baby3/public/app/name_list'; 

     

  constructor(public http: HttpClient) {
    console.log('Hello RegistrationProvider Provider');
  }
    // personalRegistration(language,country,name,add,email,tel,fnEmail,fnMob,bnEmail,bnMob) {
    // personalRegistration(perReg) {
      // return this.http.get(this.url+'language='+language+'&'+'country='+country+'&'+'name='+name+'&'+'address='+add+'&'+'email='+email+'&'+'tel='+tel+'&'+'fnEmail='+fnEmail+'&'+'fnMob='+fnMob+'&'+'bnEmail='+bnEmail+'&'+'bnMob='+bnMob);
      // return this.http.get(this.url+'perReg='+perReg);

      babyTest() {
        let postData = new FormData();

        postData.append('category_id','3');
        postData.append('counter','0');
        postData.append('direction','right');
        postData.append('gender_id','Male');
        postData.append('mean_id','');
        postData.append('name_tag','Free');
        postData.append('origin_id','');
        postData.append('planid','');
        postData.append('user_id','');


        // ,{
        //   "category_id":3,
        //   "counter":0,
        //   "direction":"right",
        //   "gender_id":"Male",
        //   "mean_id":"",
        //   "name":"A",
        //   "name_tag":"Free",
        //   "origin_id":"",
        //   "planid":"",
        //   "user_id":""
        // }

        return this.http.post(this.url,postData);
      }
      
    }
    
