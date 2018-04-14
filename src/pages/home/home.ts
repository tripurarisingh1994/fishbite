import { Component } from '@angular/core';
import { NavController, PopoverController, ModalController, ActionSheetController, Platform, LoadingController } from 'ionic-angular';
import { Profile1Page } from '../profile1/profile1';
import { NotificationPage } from '../notification/notification';
import { DiscoverPage } from '../discover/discover';
import { KyndofishingPopoverPage } from '../kyndofishing-popover/kyndofishing-popover';
import { AddMomentPage } from '../add-moment/add-moment';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { SocialSharing } from '@ionic-native/social-sharing';
import { NativeAudio } from '@ionic-native/native-audio';
import { FishIntelPage } from '../fish-intel/fish-intel';
import { HomePostCommentPage } from '../home-post-comment/home-post-comment';

import { AddServicesProvider } from '../../providers/add-services/add-services';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  
  private imageSrc: string = '';
  isFabActive: boolean = false;
  // showShareOptions: boolean = false;

  /** 
   * Post Section
  */

  posts: any[] = [];        // Storing post data
  user_id: number = 1;      // Storing logged in user id 
  hit_post_id:number[]=[];       // When hit like button, it stores the post id of which post
  offset: number=0;

  constructor(private navCtrl: NavController,
    private popoverCtrl: PopoverController,
    private camera: Camera,
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController,
    private socialShare: SocialSharing,
    private nativeAudio: NativeAudio,
    private platform: Platform,
    private addServicePro: AddServicesProvider,
    private loadingCtrl: LoadingController) {

    this.platform.ready().then(() => {
      this.nativeAudio.preloadSimple('like', 'assets/audio/like.mp3')
        .then(() => {
          console.log('ok')
        })
        .catch((err) => {
          console.log(err)
        })

    })
      .catch((err) => {
        console.log(err)
      })
  }


  ionViewDidLoad() {
    let loading = this.loadingCtrl.create();    // starting the loader
    loading.present();

    this.addServicePro.getPostData(this.user_id, this.offset).subscribe(data => {  // @param1 user_id, @param2 offset 
      console.log(data)
      this.posts = data['data'];
      loading.dismiss();
      console.log(this.posts);
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
      ev: event
    });
    console.log('working');
  }

  openGallery(): void {
    let cameraOptions: CameraOptions = {
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
  whatsAppShare(postid): void {
    console.log("postid",postid)
    this.socialShare.shareViaWhatsApp('Hi')
      .then((data) => {
        console.log(data);
        console.log('Message Sent');

        this.addServicePro.addShare(this.user_id, postid,'whatsapp').subscribe(data=> {
          console.log(data)
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  fbShare(postid): void {
    console.log("postid",postid)
    this.socialShare.shareViaFacebook('Hi')
      .then((data) => {
        console.log(data);
        console.log('Message Sent');

        this.addServicePro.addShare(this.user_id, postid,'facebook').subscribe(data=> {
          console.log(data)
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  // openShareOptions(): void {
  //   this.showShareOptions = !this.showShareOptions;
  // }

  like(postid): void {
     this.hit_post_id.push(postid);
   
    this.addServicePro.addLike(postid, this.user_id).subscribe(data => {
      console.log(data);

      this.nativeAudio.play('like').then(() => {
        console.log('play')
      })
        .catch((err) => {
          console.log(err)
        })
    })
  }

  // Go to Comment Page 
  goComment(post_id) {
    console.log(post_id)
    let commentModal = this.modalCtrl.create(HomePostCommentPage, { 'post_id': post_id });
    commentModal.present();
  }


  doInfinite(infiniteScroll) {
    this.offset++;
    setTimeout(() => {
      this.addServicePro.getPostData(this.user_id, this.offset).subscribe(data => {  // @param1 user_id, @param2 offset 
        console.log(data)
        for(let i=0; i<data['data'].length; i++) {
          console.log("data['data'][i]", data['data'][i])
          this.posts.push(data['data'][i])
        }
        // this.posts = data['data'];
        console.log(this.posts);
      })

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 1000);
  }

  // doInfinite(infiniteScroll) {
  //   this.page = this.page+1;
  //   setTimeout(() => {
  //     this.restApi.getUsers(this.page)
  //        .subscribe(
  //          res => {
  //            this.data = res;
  //            this.perPage = this.data.per_page;
  //            this.totalData = this.data.total;
  //            this.totalPage = this.data.total_pages;
  //            for(let i=0; i<this.data.data.length; i++) {
  //              this.users.push(this.data.data[i]);
  //            }
  //          },
  //          error =>  this.errorMessage = <any>error);

  //     console.log('Async operation has ended');
  //     infiniteScroll.complete();
  //   }, 1000);
  // }
}
