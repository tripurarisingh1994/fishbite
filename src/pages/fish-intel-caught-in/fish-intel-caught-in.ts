import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-fish-intel-caught-in',
  templateUrl: 'fish-intel-caught-in.html',
})
export class FishIntelCaughtInPage {

  constructor(private navCtrl: NavController,
     private navParams: NavParams,
     private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FishIntelCaughtInPage');
  }

  cancel(): void {
    this.viewCtrl.dismiss();
  }

}
