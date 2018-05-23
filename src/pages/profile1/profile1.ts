import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ModalController, App} from 'ionic-angular';
import { SettingPage } from '../setting/setting';
// import { NotificationPage } from '../notification/notification';
// import { DiscoverPage } from '../discover/discover';
// import { KyndofishingPopoverPage } from '../kyndofishing-popover/kyndofishing-popover';
// import { PopoverController } from 'ionic-angular';
// import { FishIntelPage } from '../fish-intel/fish-intel';
// import { AddMomentPage } from '../add-moment/add-moment';
import { TripsPage } from '../trips/trips';
import { BaitsPage } from '../baits/baits';
import { WaterwaysPage } from '../waterways/waterways';
import { EditProfilePage } from '../edit-profile/edit-profile';
import { MyCatchesPage } from '../my-catches/my-catches';
import { MomentsPage } from '../moments/moments';


@IonicPage()
@Component({
  selector: 'page-profile1',
  templateUrl: 'profile1.html',
})
export class Profile1Page {

  constructor(private navCtrl: NavController, 
    private navParams: NavParams,
    // private popoverCtrl:PopoverController,
    private actionSheetCtrl: ActionSheetController,
    private modalCtrl: ModalController,
    private appCtrl: App) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Profile1Page');
  }
  /** 
  * Navigate to SeetingPage 
 */
  goSetting() {
    // this.navCtrl.push(SettingPage);
    this.appCtrl.getRootNav().push(SettingPage);
  }

  /**
   * Navigate to Notification Page
   */
  // goNotification(): void {
  //   this.navCtrl.push(NotificationPage);
  // }

  // goDiscover(): void {
  //   this.navCtrl.push(DiscoverPage);
  // }

  // goFishIntel(): void {
  //   this.navCtrl.push(FishIntelPage);
  // }
  
  // popoverKyndofishing(event): void {
  //   let popover = this.popoverCtrl.create(KyndofishingPopoverPage);
  //   popover.present({
  //     ev: event
  //   });
  //   console.log('working');
  // }

  // goUserProfile(): void {
  //   this.navCtrl.push(Profile1Page)
  // }

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
    // this.navCtrl.push(BaitsPage);
    this.appCtrl.getRootNav().push(BaitsPage);
  }

  goAddCatch(): void {
    // this.navCtrl.push(MyCatchesPage);
    this.appCtrl.getRootNav().push(MyCatchesPage);
  }

  goAddWaterWay(): void {
      //  this.navCtrl.push(WaterwaysPage)
      this.appCtrl.getRootNav().push(WaterwaysPage);
  }

  goAddTrip(): void {
    // this.navCtrl.push(TripsPage);
    this.appCtrl.getRootNav().push(TripsPage);
  }
  
  goAddMoment(): void {
    // this.navCtrl.push(AddMomentPage);
    this.appCtrl.getRootNav().push(MomentsPage);
  }


  editProfileModal() {
    let profileModal = this.modalCtrl.create(EditProfilePage);
    profileModal.present();
  }

}
