import { Component } from '@angular/core';
import { IonicPage,  AlertController, ToastController } from 'ionic-angular';
import { AuthenticationProvider } from '../../providers/authentication/authentication';

@IonicPage()
@Component({
  selector: 'page-forgot-pass',
  templateUrl: 'forgot-pass.html',
})
export class ForgotPassPage {

  constructor(private authServicePr: AuthenticationProvider,
              private alertCtrl: AlertController,
              private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPassPage');
  }
  /**
   * doForgot() method
   * this method when trigger then click on 'Forgot Password' button
   */
  doForgot(email) {
    this.authServicePr.forgotPassword(email).subscribe(data=> {
      console.log(data);

      if(data['status']=='Success')
      this.presentPrompt(data['otp']);

      else if(data['status']=='fail') {
        this.presentToast('This email is not exist!');
      }
    })
  }



  presentPrompt(otp:number) {
    let alert = this.alertCtrl.create({
      title: 'OTP',
      inputs: [
        {
          name: 'otp',
          placeholder: 'OTP',
          type:'number'
        },
      ],
      buttons: [
        {
          text: 'Submit',
          handler: data => {
            if (data.otp == otp) {
               console.log(data.otp)
               console.log(otp)
               this.enterNewPasswordPrompt();
            } else {
              this.presentToast('wrong otp, please try again!');
              // return false;
              this.presentPrompt(data.otp);
            }
          }
        }
      ]
    });
    alert.present();
  }

  presentToast(msg:string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }


  // Prompt Alert for New Password
  enterNewPasswordPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Enter New Password',
      inputs: [
        {
          name: 'pass',
          placeholder: 'Password',
          type:'password'
        },

        {
          name: 'confpass',
          placeholder: 'Confirm Password',
          type:'password'
        },
      ],
      buttons: [
        {
          text: 'Submit',
          handler: data => {
            if (data.pass == data.confpass) {
               console.log(data.pass)
               console.log(data.confpass)
            } else {
              this.presentToast('Password and Confirm Password is not same');
              this.enterNewPasswordPrompt();
              // return false;
            }
          }
        }
      ]
    });
    alert.present();
  }

}
