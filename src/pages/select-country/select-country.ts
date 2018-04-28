import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { SelectOptnPerBusiPage } from '../select-optn-per-busi/select-optn-per-busi';
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
     private countryList: CountryListProvider,
     private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectCountryPage');
   
    this.loadCountryList();

    this.language = this.navParams.get('language');
    console.log(this.language);
  }

  loadCountryList() {
    let loader = this.loadingCtrl.create();

    loader.present();

    this.countryList.countryListService().subscribe(data=> {
      console.log(data);
      this.country_list = data['data']

      loader.dismiss();
    },(err)=>{
      loader.dismiss();
    })
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
