import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ForgotPassPage } from '../../pages/forgot-pass/forgot-pass';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationProvider } from '../../providers/authentication/authentication';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private login: FormGroup;

  constructor(private navCtrl: NavController, 
    private navParams: NavParams,
    private formBuilder: FormBuilder,
    private authProvider: AuthenticationProvider) {


    this.login = this.formBuilder.group({
      username: ['',],
      password: ['',]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  /** 
   * doLogin() method
   * this method when trigger then click on 'Continue' button
  */
  doLogin(){
    console.log(this.login.value.username+"   "+this.login.value.password)
    this.authProvider.login(this.login.value.username,this.login.value.password).subscribe(data=> {
      console.log(data);
    });
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
