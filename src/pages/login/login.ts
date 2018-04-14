import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController  } from 'ionic-angular';
import { ForgotPassPage } from '../../pages/forgot-pass/forgot-pass';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { HomePage } from '../home/home';

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
    private authProvider: AuthenticationProvider,
    private toastCtrl: ToastController) {


    this.login = this.formBuilder.group({
      username: ['',Validators.required],
      password: ['',Validators.required]
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  /** 
   * doLogin() method
   * this method when trigger then click on 'Continue' button
  */
  doLogin(): void {
    console.log(this.login.value.username+"   "+this.login.value.password)

    this.authProvider.login(this.login.value.username,this.login.value.password).subscribe(data=> {
      console.log(data);

      if(data['message']=='success')    this.navCtrl.setRoot(HomePage);
      else if(data['message']=='fail')  this.presentToast('username or password is worng',3000,'bottom');
      else if(data['message']=='error') this.presentToast('server error',3000,'bottom');

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


  presentToast(msg:string, duration:number, pos:string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: duration,
      position: pos
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

}
