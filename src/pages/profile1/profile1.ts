import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController} from 'ionic-angular';
import { SettingPage } from '../setting/setting';
import { NotificationPage } from '../notification/notification';
import { DiscoverPage } from '../discover/discover';
import { KyndofishingPopoverPage } from '../kyndofishing-popover/kyndofishing-popover';
import { PopoverController } from 'ionic-angular';
import { FishIntelPage } from '../fish-intel/fish-intel';
import { AddTripPage } from '../add-trip/add-trip';
import { AddWaterwayPage } from '../add-waterway/add-waterway';
import { CatchInfoPage } from '../catch-info/catch-info';
import { AddBaitPage } from '../add-bait/add-bait';
import { AddMomentPage } from '../add-moment/add-moment';



@IonicPage()
@Component({
  selector: 'page-profile1',
  templateUrl: 'profile1.html',
})
export class Profile1Page {

  constructor(private navCtrl: NavController, 
    private navParams: NavParams,
    private popoverCtrl:PopoverController,
    private actionSheetCtrl: ActionSheetController) {
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

  goFishIntel(): void {
    this.navCtrl.push(FishIntelPage);
  }
  
  popoverKyndofishing(event): void {
    let popover = this.popoverCtrl.create(KyndofishingPopoverPage);
    popover.present({
      ev: event
    });
    console.log('working');
  }

  goUserProfile(): void {
    this.navCtrl.push(Profile1Page)
  }

  more(): void {
    let actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Share',
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Report',
          handler: () => {
            console.log('Report clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
 
    actionSheet.present();
  
  }

  goAddBait(): void {
    this.navCtrl.push(AddBaitPage);
  }

  goAddCatch(): void {
    this.navCtrl.push(CatchInfoPage);
  }

  goAddWaterWay(): void {
    this.navCtrl.push(AddWaterwayPage);
  }

  goAddTrip(): void {
    this.navCtrl.push(AddTripPage);
  }
  
  goAddMoment(): void {
    this.navCtrl.push(AddMomentPage);
  }

}
