import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PersonalRegistrationPage } from '../personal-registration/personal-registration';
import { BusinessRegistrationPage } from '../business-registration/business-registration';
/**
 * Generated class for the SelectOptnPerBusiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-optn-per-busi',
  templateUrl: 'select-optn-per-busi.html',
})
export class SelectOptnPerBusiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectOptnPerBusiPage');
  }

  /** 
   * goPersonalRegistration() method
  */
  goPersonalRegistration() {
    this.navCtrl.push(PersonalRegistrationPage);
  }

  /**
   * goBusinessRegistration() method
   */
  goBusinessRegistration() {
    this.navCtrl.push(BusinessRegistrationPage);
  }

}
