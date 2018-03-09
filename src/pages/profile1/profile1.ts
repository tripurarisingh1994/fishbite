import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { SettingPage } from '../setting/setting';
import { NotificationPage } from '../notification/notification';
import { DiscoverPage } from '../discover/discover';
import { KyndofishingPopoverPage } from '../kyndofishing-popover/kyndofishing-popover';
import { PopoverController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-profile1',
  templateUrl: 'profile1.html',
})
export class Profile1Page {

  constructor(private navCtrl: NavController, 
    private navParams: NavParams,
    private popoverCtrl:PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Profile1Page');
  }
  /** 
  * Navigate to SeetingPage 
 */
  goSetting() {
    this.navCtrl.push(SettingPage);
  }

  /**
   * Navigate to Notification Page
   */
  goNotification(): void {
    this.navCtrl.push(NotificationPage);
  }

  goDiscover(): void {
    this.navCtrl.push(DiscoverPage);
  }

  popoverKyndofishing(event) {
    let popover = this.popoverCtrl.create(KyndofishingPopoverPage);
    popover.present({
      ev: event
    });
    console.log('working');
  }
}
