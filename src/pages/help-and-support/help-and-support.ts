import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController } from 'ionic-angular';
import { NotificationPage } from '../notification/notification';
import { DiscoverPage } from '../discover/discover';
import { KyndofishingPopoverPage } from '../kyndofishing-popover/kyndofishing-popover';
import { FishIntelPage } from '../fish-intel/fish-intel';
import { ProfilePage } from '../profile/profile';


@IonicPage()
@Component({
  selector: 'page-help-and-support',
  templateUrl: 'help-and-support.html',
})
export class HelpAndSupportPage {

  constructor(private navCtrl: NavController,
     private navParams: NavParams,
     private popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpAndSupportPage');
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

  goUserProfile(): void {
    this.navCtrl.push(ProfilePage);
  }

  popoverKyndofishing(event) {
    let popover = this.popoverCtrl.create(KyndofishingPopoverPage);
    popover.present({
      ev:event
    });
    console.log('working');
}

}
