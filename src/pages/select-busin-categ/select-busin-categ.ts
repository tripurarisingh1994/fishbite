import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BusinessRegistrationPage } from '../business-registration/business-registration';

/**
 * Generated class for the SelectBusinCategPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-busin-categ',
  templateUrl: 'select-busin-categ.html',
})
export class SelectBusinCategPage {

  language="";
  country="";
  businessCategory="";

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectCountryPage');
    this.language = this.navParams.get('language');
    this.country  = this.navParams.get('country');
  }

  goBusinessRegistration(businessCategory) {
    console.log(businessCategory);
    this.navCtrl.push(BusinessRegistrationPage,{
      language:this.language,
      country:this.country,
      businessCategory:this.businessCategory
    })
  }

}
