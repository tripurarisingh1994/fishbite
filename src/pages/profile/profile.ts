import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController, ModalController, ActionSheetController, App } from 'ionic-angular';
import { SettingPage } from '../setting/setting';
// import { NotificationPage } from '../notification/notification';
// import { DiscoverPage } from '../discover/discover';
// import { KyndofishingPopoverPage } from '../kyndofishing-popover/kyndofishing-popover';
// import { AddMomentPage } from '../add-moment/add-moment';
import { Camera, CameraOptions } from '@ionic-native/camera';
// import { FishIntelPage } from '../fish-intel/fish-intel';
// import { AddTripPage } from '../add-trip/add-trip';
// import { AddWaterwayPage } from '../add-waterway/add-waterway';
// import { CatchInfoPage } from '../catch-info/catch-info';
// import { AddBaitPage } from '../add-bait/add-bait';
import { TripsPage } from '../trips/trips';
import { BaitsPage } from '../baits/baits';
import { WaterwaysPage } from '../waterways/waterways';
import { EditProfilePage } from '../edit-profile/edit-profile';
import { MyCatchesPage } from '../my-catches/my-catches';
import { MomentsPage } from '../moments/moments';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
 
  private imageSrc:string='';
  
  constructor(private navCtrl: NavController, 
    private navParams: NavParams,
    private popoverCtrl: PopoverController,
    private camera: Camera,
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController,
    private appCtrl: App,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
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

//   popoverKyndofishing(event) {
//     let popover = this.popoverCtrl.create(KyndofishingPopoverPage);
//     popover.present({
//       ev:event
//     });
//     console.log('working');
// }

  openGallery (): void {
    let cameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,      
      quality: 100,
      targetWidth: 1000,
      targetHeight: 1000,
      encodingType: this.camera.EncodingType.JPEG,      
      correctOrientation: true
    }

    this.camera.getPicture(cameraOptions)
      .then(file_uri => this.imageSrc = file_uri, 
      err => console.log(err));   
  }

  // goMomentBtn() {
  //   let profileModal = this.modalCtrl.create(AddMomentPage);
  //   profileModal.present();
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
      // this.navCtrl.push(AddBaitPage);
      // this.navCtrl.push(BaitsPage);
      // this.viewCtrl.dismiss();
      this.appCtrl.getRootNav().push(BaitsPage)
    }

    goAddCatch(): void {
      // this.navCtrl.push(CatchInfoPage);
      // this.navCtrl.push(MyCatchesPage);
      this.appCtrl.getRootNav().push(MyCatchesPage);
    }

    goAddWaterWay(): void {
      // this.navCtrl.push(AddWaterwayPage);
      // this.navCtrl.push(WaterwaysPage)
      this.appCtrl.getRootNav().push(WaterwaysPage);
    }

    goAddTrip(): void {
      // this.navCtrl.push(AddTripPage);
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
