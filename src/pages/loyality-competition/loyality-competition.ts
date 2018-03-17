import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { NotificationPage } from '../notification/notification';
import { DiscoverPage } from '../discover/discover';
import { FishIntelPage } from '../fish-intel/fish-intel';
import { KyndofishingPopoverPage } from '../kyndofishing-popover/kyndofishing-popover';
import { ProfilePage } from '../profile/profile';


@IonicPage()
@Component({
  selector: 'page-loyality-competition',
  templateUrl: 'loyality-competition.html',
})
export class LoyalityCompetitionPage {

  constructor(
     private navCtrl: NavController,
     private navParams: NavParams,
     private popoverCtrl: PopoverController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoyalityCompetitionPage');
  }

  goNotification(): void {
    this.navCtrl.push(NotificationPage);
  }

  goDiscover(): void {
    this.navCtrl.push(DiscoverPage);
  }

  goFishIntel(): void {
    this.navCtrl.push(FishIntelPage);
  }

  popoverKyndofishing(event): void {
    let popover = this.popoverCtrl.create(KyndofishingPopoverPage);
    popover.present({
      ev:event
    });
    console.log('working');
  }

  goUserProfile(): void {
    this.navCtrl.push(ProfilePage);
  }

}
