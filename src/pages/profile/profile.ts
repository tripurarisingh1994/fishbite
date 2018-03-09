import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController} from 'ionic-angular';
import { SettingPage } from '../setting/setting';
import { NotificationPage } from '../notification/notification';
import { DiscoverPage } from '../discover/discover';
import { KyndofishingPopoverPage } from '../kyndofishing-popover/kyndofishing-popover';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
 
  private segm1:string='staff';
  private segm2:string='logcatch';
  
  constructor(private navCtrl: NavController, 
    private navParams: NavParams,
    private popoverCtrl: PopoverController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
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
      ev:event
    });
    console.log('working');
}


}
