import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  SelectOptnPerBusiPage } from '../../pages/select-optn-per-busi/select-optn-per-busi';

/**
 * Generated class for the SelectCountryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-select-country',
  templateUrl: 'select-country.html',
})
export class SelectCountryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectCountryPage');
  }

  /**
   * goPesrsonOrBusin() method
   */
  goPesrsonOrBusin() {
    this.navCtrl.push(SelectOptnPerBusiPage);
  }

}
