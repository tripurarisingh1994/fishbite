import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfilePage } from '../profile/profile';

@IonicPage()
@Component({
  selector: 'page-choose-plan-premium-trail',
  templateUrl: 'choose-plan-premium-trail.html',
})
export class ChoosePlanPremiumTrailPage {

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChoosePlanPremiumTrailPage');
  }

    /**goToJoinLocalFish_Prem() method */
    goToJoinLocalFish_Prem() {
      this.navCtrl.setRoot(ProfilePage);
    }
      /**goToJoinLocalFish_Trail() method */
    goToJoinLocalFish_Trail() {
      this.navCtrl.setRoot(ProfilePage);
    }
}
