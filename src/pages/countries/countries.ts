import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { CountryListProvider } from '../../providers/country-list/country-list';
import { CatchInfoProvider } from '../../providers/catch-info/catch-info';

@IonicPage()
@Component({
  selector: 'page-countries',
  templateUrl: 'countries.html',
})
export class CountriesPage {

  countries = [];
  countryName:string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private countryListPro: CountryListProvider,
              private catchInfoPro: CatchInfoProvider,
              private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CountriesPage');

    this.countryListPro.countryListService().subscribe(data=> {
      console.log(data);
      this.countries = data['data']
    })
  }


  selectCountry() {
    // console.log("country",this.countryName)
    if(this.countryName){
      this.catchInfoPro.countryName = this.countryName;
      console.log("country",this.countryName)
    }
    
  }

  done() {
    if(this.countryName) {
      this.navCtrl.pop();
    }
    else {
      this.presentToast('Please select the country');
    }
  }


  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 1000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
}
