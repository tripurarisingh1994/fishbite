import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController  } from 'ionic-angular';
import { ForgotPassPage } from '../forgot-pass/forgot-pass';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { Storage } from '@ionic/storage';
import { MainPage } from '../main/main';


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
              private toastCtrl: ToastController,
              private storage: Storage) {

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

      console.log(data['data'].id)
      
      if(data['message']=='success')  {
         // set a key/value
        this.storage.set('user_id', data['data'].id);
        this.storage.set('user_name', data['data'].name);

        // Or to get a key/value pair
        this.storage.get('user_id').then((user_id) => {
          console.log('user_id', user_id);
        });
        this.storage.get('user_name').then((user_name) => {
          console.log('user_name', user_name);
        });

        this.navCtrl.setRoot(MainPage);
      } 
      else if(data['message']=='fail')  this.presentToast('username or password is worng',1000,'bottom');
      else if(data['message']=='error') this.presentToast('server error',1000,'bottom');

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
