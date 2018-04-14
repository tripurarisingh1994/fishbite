import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AddBaitPage } from '../add-bait/add-bait';
import { AddTripPage } from '../add-trip/add-trip';
import { AddWaterwayPage } from '../add-waterway/add-waterway';
import { CatchInfoPage } from '../catch-info/catch-info';
import { AddMomentPage } from '../add-moment/add-moment';

@IonicPage()
@Component({
  selector: 'page-add-new',
  templateUrl: 'add-new.html',
})
export class AddNewPage {

  constructor(private navCtrl: NavController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewPage');
  }

  goAddTrip() {
   this.navCtrl.push(AddTripPage);
  }

  goAddBait() {
    this.navCtrl.push(AddBaitPage);
  }

  goAddWaterWay() {
    this.navCtrl.push(AddWaterwayPage);
  }

  goAddMoment() {
    this.navCtrl.push(AddMomentPage);
  }

  goAddCatch() {
    this.navCtrl.push(CatchInfoPage);
  }

}
