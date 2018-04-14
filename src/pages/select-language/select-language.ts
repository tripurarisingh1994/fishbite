import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SelectCountryPage } from '../../pages/select-country/select-country';
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
     private languageList: LanguageListProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectLanguagePage');
    this.languageList.languageListService().subscribe(data=> {
      console.log(data);
      this.language_list=data['data'];
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
