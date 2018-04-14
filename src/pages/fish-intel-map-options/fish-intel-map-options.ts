import { Component } from '@angular/core';
import { IonicPage, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-fish-intel-map-options',
  templateUrl: 'fish-intel-map-options.html',
})
export class FishIntelMapOptionsPage {

  constructor(
     private viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FishIntelMapOptionsPage');
  }
  cancel(): void {
    this.viewCtrl.dismiss();
  }

}
