import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PersonalRegistrationPage } from '../personal-registration/personal-registration';
import { SelectBusinCategPage } from '../select-busin-categ/select-busin-categ';

@IonicPage()
@Component({
  selector: 'page-select-optn-per-busi',
  templateUrl: 'select-optn-per-busi.html',
})
export class SelectOptnPerBusiPage {

  /**
   * NavParams
   * language@variable, country@variable
   */
  language='';
  country='';

  constructor(private navCtrl: NavController,
     private navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectOptnPerBusiPage');
    this.language = this.navParams.get('language');
    this.country  = this.navParams.get('country');
  }

  /** 
   * goPersonalRegistration() method
  */
  goPersonalRegistration() {
    console.log(this.country)
    console.log(this.language)
    this.navCtrl.push(PersonalRegistrationPage,{
      country:this.country,
      language:this.language
    });
  }

  goSelectBusinessCate() {
    console.log(this.country)
    console.log(this.language)
    this.navCtrl.push(SelectBusinCategPage,{
      language:this.language,
      country:this.country
    });
  }

}
