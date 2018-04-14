import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SelectOptnPerBusiPage } from '../../pages/select-optn-per-busi/select-optn-per-busi';
import { CountryListProvider } from '../../providers/country-list/country-list';


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
   country_list;



  language='';
  constructor(private navCtrl: NavController,
     private navParams: NavParams,
     private countryList: CountryListProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectCountryPage');

    this.countryList.countryListService().subscribe(data=> {
      console.log(data);
      this.country_list = data['data']
    })
    this.language = this.navParams.get('language');
    console.log(this.language);
  }

  /**
   * goPesrsonOrBusin() method
   */
  goPesrsonOrBusin(country) {
    this.navCtrl.push(SelectOptnPerBusiPage,
      {country:country,language:this.language});
    console.log(country);

  }

}
