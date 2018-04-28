import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SelectLanguagePage } from '../../pages/select-language/select-language';
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
// import { Storage } from '@ionic/storage';
// import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {


  // user_id:number;


  /* 
   * Google Plus Fields 
  */
      // displayName:any;
      g_email:any;
      g_firstname: any;
      g_lastname: any;
      // g_userId: any;
      isLoggedIn:boolean=false;
  

  /* 
  * Facebook Fields
  */
      f_email:any;
      f_firstname:any;
      f_lastname:any;
 



  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private googlePlus: GooglePlus,
              private fb: Facebook,
              private authServicePr: AuthenticationProvider,
              // private storage: Storage
            ) {

    // //  get user_id
    // this.storage.get('user_id').then((val) => {
    //   // console.log('user_id', val);
    //   this.user_id = val;
    // });
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
    
    // if(this.user_id) {
    //     this.navCtrl.setRoot(HomePage)
    // }
    // else {
        this.navCtrl.push(LoginPage)
    // }
  }

  googlePlusLogin() {
    console.log('google plus login');
    this.googlePlus.login({}).then((res)=> {
      console.log(res);

      // this.displayName = res.displayName
      this.g_email       = res.email
      this.g_firstname   = res.givenName
      this.g_lastname    = res.familyName
      // this.g_userId      = res.userId

      this.authServicePr.gPlusAndFbLogin(res.email).subscribe(data=> {
        console.log(data);
      })

      this.isLoggedIn = true;
      console.log("email",this.g_email)
      console.log("firstname",this.g_firstname)
      console.log("lastname",this.g_lastname)
      // console.log("userid",this.g_userId)
    })
    .catch((err)=> console.error(err))
  }

  fbLogin() {
    this.fb.login(['public_profile', 'email'])

      .then((res: FacebookLoginResponse) => {

        console.log('Logged into Facebook!', res)
        this.fb.api('me?fields=id,email,first_name,last_name', [])

          .then(data => {
            console.log(data)
            console.log(data.id)
            // console.log(data['id'])

            // facebook login check by email
            this.authServicePr.gPlusAndFbLogin(data.email).subscribe(data=> {
              console.log(data);
            })
          })
          .catch(e => console.log('Error in getting data from fb', e))
      })
      .catch(e => console.log('Error logging into Facebook', e));
  }
}
