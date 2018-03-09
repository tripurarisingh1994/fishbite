import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-fish-intel-fish-species-fliter',
  templateUrl: 'fish-intel-fish-species-fliter.html',
})
export class FishIntelFishSpeciesFliterPage {

  constructor(private navCtrl: NavController,
     private navParams: NavParams,
     private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FishIntelFishSpeciesFliterPage');
  }

  cancel() {
     this.viewCtrl.dismiss();
  }

}
