import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { SelectCountryPage } from '../select-country/select-country';
import { LanguageListProvider } from '../../providers/language-list/language-list';


@IonicPage()
@Component({
  selector: 'page-select-language',
  templateUrl: 'select-language.html',
})
export class SelectLanguagePage {

  language_list;
  constructor(private navCtrl: NavController,
     private navParams: NavParams,
     private languageList: LanguageListProvider,
     private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectLanguagePage');
  
    this.loadLanguageList();
  }

  loadLanguageList() {

    let loading = this.loadingCtrl.create();

    loading.present();

    this.languageList.languageListService().subscribe(data=> {
      console.log(data);
      this.language_list=data['data'];
      loading.dismiss();
    },(err)=>{
      loading.dismiss();
    })
  }
  
  /** 
   * goCountry() method
  */
  goCountry(language) {
    console.log(language);
    this.navCtrl.push(SelectCountryPage,{language:language});
  }
}
