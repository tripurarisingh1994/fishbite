import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CatchInfoProvider } from '../../providers/catch-info/catch-info';


@IonicPage()
@Component({
  selector: 'page-fishing-methods',
  templateUrl: 'fishing-methods.html',
})
export class FishingMethodsPage {

  fishingMethods = []
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private catchInfoPro: CatchInfoProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FishingMethodsPage');

    this.catchInfoPro.getFishingMethods().subscribe(data=> {
      console.log(data);
      this.fishingMethods = data['data']
    })
  }

  upDateCheck(fishingMethod_id) {
    console.log(fishingMethod_id)
    this.catchInfoPro.fishingMethods_Id.push(fishingMethod_id); // push the id in catch info page array @fishingMethods
  }

  done() {
    this.navCtrl.pop();
  }

}
