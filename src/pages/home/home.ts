import { Component } from '@angular/core';
import { NavController,PopoverController, ModalController,ActionSheetController,Platform } from 'ionic-angular';
import { Profile1Page } from '../profile1/profile1';
import { NotificationPage } from '../notification/notification';
import { DiscoverPage } from '../discover/discover';
import { KyndofishingPopoverPage } from '../kyndofishing-popover/kyndofishing-popover';
import { AddMomentPage } from '../add-moment/add-moment';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { SocialSharing } from '@ionic-native/social-sharing';
import { NativeAudio } from '@ionic-native/native-audio';
import { FishIntelPage } from '../fish-intel/fish-intel';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private imageSrc:string='';
  isFabActive:boolean=false;
  showShareOptions:boolean=false;

  constructor(private navCtrl: NavController,
    private popoverCtrl: PopoverController,
    private camera: Camera,
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController,
    private socialShare: SocialSharing,
    private nativeAudio: NativeAudio,
    private platform: Platform) {
      
      debugger;
      this.platform.ready().then(()=>{
        this.nativeAudio.preloadSimple('like', 'assets/audio/like.mp3')
      .then(()=> {
        console.log('ok')
      })
      .catch((err)=> {
        console.error(err)
      })
        console.log('')
      })
      .catch((err)=> {
        console.error(err)
      })
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

    goFishIntel(): void {
      this.navCtrl.push(FishIntelPage);
    }

  /**
   * Add New Page On Fab Hit
   */
    fabHit(): void {
      console.log('fab workig');
      this.isFabActive = !this.isFabActive;
      console.log(this.isFabActive);
    }

    popoverKyndofishing(event): void {
        let popover = this.popoverCtrl.create(KyndofishingPopoverPage);
        popover.present({
          ev:event
        });
        console.log('working');
    }

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

    goMomentBtn() {
      let profileModal = this.modalCtrl.create(AddMomentPage);
      profileModal.present();
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

    /** Social Media Sharing */
    whatsAppShare(): void {
      this.socialShare.shareViaWhatsApp('Hello','assets/imgs/fish4.jpg',null)
      .then(()=> {
        console.log('Message Sent');
      })
      .catch((err)=> {
        console.error(err);
      })
    }

    fbShare(): void {
      this.socialShare.shareViaFacebook('Hello','assets/imgs/fish4.jpg',null)
      .then(()=> {
        console.log('Message Sent');
      })
      .catch((err)=> {
        console.error(err);
      })
    }

    openShareOptions(): void {
      this.showShareOptions = !this.showShareOptions;
    }

    like(): void {
      this.nativeAudio.play('like').then(()=> {
        console.log('play')
      })
      .catch((err)=> {
        console.error(err)
      })
    }
}
