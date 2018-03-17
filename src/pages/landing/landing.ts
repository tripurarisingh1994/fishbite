import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { SelectLanguagePage } from '../../pages/select-language/select-language';
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';


@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

  displayName:any;
  email:any;
  givenName: any;
  userId: any;
  imageUrl: any;
  isLoggedIn:boolean=false;



  constructor(private navCtrl: NavController,
     private navParams: NavParams,
     private googlePlus: GooglePlus,
     private fb: Facebook) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandingPage');
  }

  /** 
   * goSignup() method
   * this method when trigger then click on 'Signup with Email' button
   * Nevigating to SelectLanguagePage
  */
 goSignup() {
    this.navCtrl.push(SelectLanguagePage);
  }

  /**
   * goLogin() method
   * this method when trigger then click on 'Login' button
   * Nevigating to LoginPage
   */
  goLogin(){
    this.navCtrl.push(LoginPage)
  }

  googlePlusLogin() {
    console.log('google plus login');
    this.googlePlus.login({}).then((res)=> {
      console.log(res);

      this.displayName = res.displayName
      this.email       = res.email
      this.givenName   = res.givenName
      this.userId      = res.userId
      this.imageUrl    = res.imageUrl

      this.isLoggedIn = true;
    })
    .catch((err)=> console.error(err))
  }

  fbLogin() {
    this.fb.login(['public_profile', 'user_friends', 'email'])
  .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
  .catch(e => console.log('Error logging into Facebook', e));
  }
}
