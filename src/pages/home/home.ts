import { Component, ViewChild } from '@angular/core';
import { NavController, PopoverController, ModalController, ActionSheetController, Platform, LoadingController, AlertController, IonicPage, ViewController } from 'ionic-angular';
import { Profile1Page } from '../profile1/profile1';
import { NotificationPage } from '../notification/notification';
import { DiscoverPage } from '../discover/discover';
import { KyndofishingPopoverPage } from '../kyndofishing-popover/kyndofishing-popover';
// import { AddMomentPage } from '../add-moment/add-moment';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { SocialSharing } from '@ionic-native/social-sharing';
import { NativeAudio } from '@ionic-native/native-audio';
import { FishIntelPage } from '../fish-intel/fish-intel';
import { HomePostCommentPage } from '../home-post-comment/home-post-comment';
import { AddServicesProvider } from '../../providers/add-services/add-services';
import { Storage } from '@ionic/storage';
// import { AddNewPage } from '../add-new/add-new';


@IonicPage()
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
  user_id: number;      // Storing logged in user id 

  // hit_post_id:number[]=[];       // When hit like button, it stores the post id of which post
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
              private loadingCtrl: LoadingController,
              private storage: Storage,
              private alertCtrl: AlertController,
              private viewCtrl: ViewController) {

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
     this.storage.get('user_id').then((user_id) => {
      console.log('user_id', user_id);
      this.user_id = user_id;

      let loading = this.loadingCtrl.create({showBackdrop:false});    // starting the loader
      loading.present();

      this.addServicePro.getPostData(this.user_id, this.offset).subscribe(data => {  // @param1 user_id, @param2 offset 
        console.log(data)
        this.posts = data['data'];
        loading.dismiss();
        console.log(this.posts);
      })
    });  
   
  }

  ionViewWillEnter() {
    this.loadPost();
  }

  loadPost() {

    if(this.user_id) {

      this.addServicePro.getPostData(this.user_id, this.offset).subscribe(data => {  // @param1 user_id, @param2 offset 
        console.log(data)
        this.posts = data['data'];
        console.log(this.posts);
      })
    }
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
  // fabHit(): void {
  //   console.log('fab workig');
  //   this.isFabActive = !this.isFabActive;
  //   console.log(this.isFabActive);

  //  this.navCtrl.push(AddNewPage);
   
  // }

  popoverKyndofishing(event): void {
    let popover = this.popoverCtrl.create(KyndofishingPopoverPage);
    popover.present({
      ev: event
    });
    console.log('working');
  }

  // openGallery(): void {
  //   let cameraOptions: CameraOptions = {
  //     sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
  //     destinationType: this.camera.DestinationType.FILE_URI,
  //     quality: 100,
  //     targetWidth: 1000,
  //     targetHeight: 1000,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     correctOrientation: true
  //   }

  //   this.camera.getPicture(cameraOptions)
  //     .then(file_uri => this.imageSrc = file_uri,
  //       err => console.log(err));
  // }

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

  /** Social Media Sharing */
  whatsAppShare(post): void {
    console.log("post",post)
    this.socialShare.shareViaWhatsApp(post.post_name,null,`http://vps137395.vps.ovh.ca/fishbite/${post.post_files.s_filepath}/${post.post_files.s_filname}`)
      .then((data) => {
        console.log(data);
        console.log('Message Sent');

        this.addServicePro.addShare(this.user_id, post.id,'whatsapp').subscribe(data=> {
          console.log(data)
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  fbShare(post): void {
    console.log("post",post)
    // console.log("post.post_content",post.post_name)
    // console.log(`http://vps137395.vps.ovh.ca/fishbite/${post.post_files.s_filepath}/${post.post_files.s_filname}`)

    this.socialShare.shareViaFacebook(post.post_name,null,`http://vps137395.vps.ovh.ca/fishbite/${post.post_files.s_filepath}/${post.post_files.s_filname}`)
      .then((data) => {
        console.log(data);
        console.log('Message Sent');

        this.addServicePro.addShare(this.user_id, post.id,'facebook').subscribe(data=> {
          console.log(data)
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  // openShareOptions(): void {
  //   this.showShareOptions = !this.showShareOptions;
  // 

  like(postid): void {
    //  this.hit_post_id.push(postid);
   
    this.addServicePro.addLike(postid, this.user_id).subscribe(data => {
      console.log(data);

      if(data['message']=="successfully updated") {

        this.loadPost();
        
        this.nativeAudio.play('like').then(() => {
          console.log('play')
        })
          .catch((err) => {
            console.log(err)
        })

      }
     
    })
  }

  // Go to Comment Page 
  goComment(post_id) {
    console.log(post_id)
    let commentModal = this.modalCtrl.create(HomePostCommentPage, { 'post_id': post_id });
    commentModal.onDidDismiss(()=> {
     this.loadPost();
    })
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
        
        console.log(this.posts);
      })

      infiniteScroll.complete();
    }, 1000);
  }

}
