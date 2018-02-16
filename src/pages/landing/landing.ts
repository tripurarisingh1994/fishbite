import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';
import { SelectLanguagePage } from '../../pages/select-language/select-language';

/**
 * Generated class for the LandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html',
})
export class LandingPage {

  constructor(private navCtrl: NavController, private navParams: NavParams) {
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

}
