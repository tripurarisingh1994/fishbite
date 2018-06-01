import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

@IonicPage()
@Component({
  selector: 'page-find-friends-on-fb',
  templateUrl: 'find-friends-on-fb.html',
})
export class FindFriendsOnFbPage {

  fbData = [];
  // friendsList:number[] = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private fb: Facebook) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FindFriendsOnFbPage');
    this.loadFbFriends();
    this.fbData = [
      {id:0, name:'My Neighbor Totoro',email:'abcdef@gmail.com', image:'assets/imgs/profile.jpg', checked:''},
      {id:1, name:'My Neighbor Totoro',email:'abcdef@gmail.com', image:'assets/imgs/profile.jpg', checked:''},
      {id:2, name:'My Neighbor Totoro',email:'abcdef@gmail.com', image:'assets/imgs/profile.jpg', checked:''},
      {id:3, name:'My Neighbor Totoro',email:'abcdef@gmail.com', image:'assets/imgs/profile.jpg', checked:''},
      {id:4, name:'My Neighbor Totoro',email:'abcdef@gmail.com', image:'assets/imgs/profile.jpg', checked:''},
      {id:5, name:'My Neighbor Totoro',email:'abcdef@gmail.com', image:'assets/imgs/profile.jpg', checked:''},
    ]
  }

  loadFbFriends() {
    this.fb.login(['public_profile','user_friends', 'email'])
    .then((res: FacebookLoginResponse) => {
        this.fb.api('me?fields=id,friends{name,link}',[])
        .then((data)=> {
          console.log(data)
        })
        .catch(e=> console.log('Error in getting data from fb', e))
    })
    .catch(e=> console.log('Error logging into facebook', e))
  }

  clickTheFriends(id) {
    // console.log("id",id)

    // if(this.friendsList) {
    //    let index = this.friendsList.indexOf(id)

    //   if( index < 0 ) {
    //     this.friendsList.push(id);
    //     // console.log(this.friendsList)
    //     this.fbData[id].checked=true
    //     console.log(this.fbData)
    //   }
    //   else {
    //     console.log(id+' already exist.');
    //     // console.log("friend",this.friendsList)
    //     this.fbData[id].checked=false
    //     console.log(this.fbData)
    //   }
    // }
    // else {
    //   this.friendsList.push(id);
    //   // console.log(this.friendsList)
    //   this.fbData[id].checked=true
    //   console.log(this.fbData)
    // }

    if(this.fbData[id].checked == '' || false) {
      this.fbData[id].checked = true;
    }
    else {
      this.fbData[id].checked = false;
    }
    
  }

  addFacebookFr() {
    console.log('addFacebookFr')
  }
  
}
