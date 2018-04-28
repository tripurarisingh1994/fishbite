import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from 'ionic-angular';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable()
export class AddServicesProvider {

public water_id:number;         // It variable for add-water-select-water.ts
public water_name:string;   // It variable for add-water-select-water.ts


public member_id:number[]   = [];     // it variable for add-trip-search-member.ts
public member_name:string[] = [];       // it variable for add-trip-search-member.ts



  private url="http://vps137395.vps.ovh.ca/fishbite/public/api/";

  constructor(public http: HttpClient) {
    console.log('Hello AddServicesProvider Provider');

  }

  addWaterWaysService(name,desc,userid, lat,lang) {

        let formData = new FormData();

        formData.append('name',name);
        formData.append('description',desc);
        formData.append('lat',lat);
        formData.append('lng',lang);
        formData.append('user_id',userid);
    
    return this.http.post(this.url+'addWaterway',formData);
  }

  // addTripService() {

  // }

  getLatLang() {  // Getting Latitude and longitude
    return this.http.get('http://ip-api.com/json');
  }


  
  searchUser(searchkey){  // Search member

    let formdata = new FormData();
    formdata.append('alpha',searchkey)

    return this.http.post(this.url+'searchUser', formdata);
  }


  searchWaterWay(searchkey){  // Search member

    let formdata = new FormData();
    formdata.append('alpha',searchkey)

    return this.http.post(this.url+'searchWaterways', formdata);
  }




  getPostData(user_id,offset) {   // Get post data of home page
    let data = new FormData();
    data.append("user_id",user_id);
    data.append("offset",offset);
    return this.http.post(this.url+'getpost',data);
  }

  getComment(post_id,user_id) {    // Get post data of home page
    let data = new FormData();
    data.append('post_id',post_id)
    data.append('user_id',user_id)
    return this.http.post(this.url+'getComment',data);
  }

  addComment(user_id,post_id,comment) {
    let data = new FormData();
    data.append("user_id",user_id);
    data.append("post_id",post_id);
    data.append("comment",comment);

    return this.http.post(this.url+'addPostComment',data);
  }



  addLike(post_id,user_id) {  // Handle like of the post
   
    let data = new FormData();
    data.append("user_id",user_id);
    data.append("post_id",post_id);

    return this.http.post(this.url+'addPostLike',data);
  }

  addShare(user_id, post_id, social_name) {
    let data = new FormData()
    data.append("user_id",user_id)
    data.append("post_id",post_id)
    data.append("social_name",social_name)

    return this.http.post(this.url+'sharePost',data)
  }


  // Getting Baits, Feed By User

  getBaitData(user_id) {
    let data = new FormData();
    data.append('user_id',user_id);

    return this.http.post(this.url+'getBait',data);
  }



  getTrip(user_id,offset) { // Get trip data
    let data = new FormData();
    data.append("user_id",user_id)
    data.append("offset",offset);

    return this.http.post(this.url+'getTrip',data);
  }

  getWaterways(user_id) {
    let data = new FormData();
    data.append('user_id',user_id);
    return this.http.post(this.url+'getWaterway',data);
  }

  getCatch(user_id) {
    let data = new FormData();
    data.append('user_id',user_id); 
    return this.http.post(this.url+'getCatch',data);
  }

}
