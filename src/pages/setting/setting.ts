import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { NotificationPage } from '../notification/notification';
import { KyndofishingPopoverPage } from '../kyndofishing-popover/kyndofishing-popover';
import { DiscoverPage } from '../discover/discover';


@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(private navCtrl: NavController, 
    private navParams: NavParams,
    private popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
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
