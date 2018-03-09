import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,PopoverController } from 'ionic-angular';
import { NotificationPage } from '../notification/notification';
import { DiscoverPage } from '../discover/discover';
import { KyndofishingPopoverPage } from '../kyndofishing-popover/kyndofishing-popover';

@IonicPage()
@Component({
  selector: 'page-privacy',
  templateUrl: 'privacy.html',
})
export class PrivacyPage {

  constructor(private navCtrl: NavController,
     private navParams: NavParams,
    private popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrivacyPage');
  }

  goNotification(): void {
    this.navCtrl.push(NotificationPage);
  }

  goDiscover(): void {
    this.navCtrl.push(DiscoverPage);
  }

  popoverKyndofishing(event) {
    let popover = this.popoverCtrl.create(KyndofishingPopoverPage);
    popover.present({
      ev:event
    });
    console.log('working');
}


}
