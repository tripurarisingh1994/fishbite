import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-fish-intel-map-options',
  templateUrl: 'fish-intel-map-options.html',
})
export class FishIntelMapOptionsPage {

  constructor(private navCtrl: NavController,
     private navParams: NavParams,
     private viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FishIntelMapOptionsPage');
  }
  cancel(): void {
    this.viewCtrl.dismiss();
  }

}
