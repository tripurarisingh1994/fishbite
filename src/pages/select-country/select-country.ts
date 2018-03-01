import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  SelectOptnPerBusiPage } from '../../pages/select-optn-per-busi/select-optn-per-busi';


@IonicPage()
@Component({
  selector: 'page-select-country',
  templateUrl: 'select-country.html',
})
export class SelectCountryPage {
  
  /**
   * NavParams
   * language@variable
   */
  language='';
  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectCountryPage');
    this.language = this.navParams.get('language');
    console.log(this.language);
  }

  /**
   * goPesrsonOrBusin() method
   */
  goPesrsonOrBusin(country) {
    this.navCtrl.push(SelectOptnPerBusiPage,
      {country:country,language:this.language});
  }

}
