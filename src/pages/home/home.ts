import { Component } from '@angular/core';
import { NavController,PopoverController } from 'ionic-angular';
import { Profile1Page } from '../profile1/profile1';
import { NotificationPage } from '../notification/notification';
import { DiscoverPage } from '../discover/discover';
import { KyndofishingPopoverPage } from '../kyndofishing-popover/kyndofishing-popover';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  ionSegment:string='logfish';
  isFabActive:boolean=false;

  constructor(private navCtrl: NavController,
    private popoverCtrl: PopoverController,) {

  }

  /**
   * Navigate to user profile1
   */
    goUserProfile(): void {
      this.navCtrl.push(Profile1Page);
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
  /**
   * Add New Page On Fab Hit
   */
    fabHit(): void {
      console.log('fab workig');
      this.isFabActive = !this.isFabActive;
      console.log(this.isFabActive);
    }

    popoverKyndofishing(event) {
        let popover = this.popoverCtrl.create(KyndofishingPopoverPage);
        popover.present({
          ev:event
        });
        console.log('working');
    }
}
