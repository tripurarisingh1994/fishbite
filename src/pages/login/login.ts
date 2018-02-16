import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ForgotPassPage } from '../../pages/forgot-pass/forgot-pass';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  /** 
   * doLogin() method
   * this method when trigger then click on 'Continue' button
  */
  doLogin(){

  }
  /** 
   * goForgot() method
   * this method when trigger then click on ' Forgot your password?' button
   *  Nevigating to ForgotPassPage
  */
  goForgot() {
    this.navCtrl.push(ForgotPassPage);
  }

}
