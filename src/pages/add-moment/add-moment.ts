import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-add-moment',
  templateUrl: 'add-moment.html',
})
export class AddMomentPage {

  constructor(private navCtrl: NavController,
     private navParams: NavParams,
     private viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMomentPage');
  }

  closeAddMoment() {
    this.viewCtrl.dismiss();
  }

}
