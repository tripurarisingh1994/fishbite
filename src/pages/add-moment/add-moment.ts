import { Component } from '@angular/core';
import { IonicPage, NavController, ViewController, ModalController, LoadingController, ToastController, normalizeURL } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject} from '@ionic-native/file-transfer';
import { AuthenticationProvider } from '../../providers/authentication/authentication'; 
import { Geolocation } from '@ionic-native/geolocation';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { NativeGeocoder, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';
import { Storage } from '@ionic/storage';
import { FilePath } from '@ionic-native/file-path';
import { Platform } from 'ionic-angular';
import { MainPage } from '../main/main';


@IonicPage()
@Component({
  selector: 'page-add-moment',
  templateUrl: 'add-moment.html',
})
export class AddMomentPage {

  lang: number;         // Storing the longitude
  lat: number;          // Storing the latitude
  imgURI:any='';        // Storing the image URI
  videoURI:any='';      // Storing the video URI
  post_img_video:any;
  isValid:boolean=true;
  mimeType:string='';

  location_string:string='';

  user_id:number;
  user_name:string;
  
  postDesc:string='';   // Storing post description

  constructor(private navCtrl: NavController,
              private viewCtrl: ViewController,
              private camera: Camera,
              private loadingCtrl: LoadingController,
              private transfer: FileTransfer,
              private toastCtrl: ToastController,
              private authSerPro: AuthenticationProvider,
              private storage: Storage,
              private filePath: FilePath,
              private plt: Platform,
              private locationAccuracy: LocationAccuracy,
              private nativeGeocoder: NativeGeocoder,
              private geolocation: Geolocation,) {

        // get user_id
        this.storage.get('user_id').then((user_id) => {
          console.log('user_id', user_id);
          this.user_id = user_id;
        });

        this.storage.get('user_name').then((user_name) => {
          console.log('user_name', user_name);
          this.user_name = user_name;
        });

 }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddMomentPage');

    this.authSerPro.getLatLang().subscribe(data=> {
      this.lat = data['lat'];
      this.lang = data['lon'];
    });
  }

  // closeAddMoment() {
  //   this.viewCtrl.dismiss();
  // }

  getImage() {
    this.isValid = true;
    this.mimeType = 'image/jpeg';
    
    const options: CameraOptions = {
      quality:50,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,
      mediaType:this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData)=> {

      if (this.plt.is('android')) {
        this.filePath.resolveNativePath(imageData)
        .then(filePath =>{
          console.log(filePath)
          
          this.imgURI = filePath;
        })
        .catch(err => console.log(err));
      }
      else {
        this.imgURI = imageData;
      }
      
      console.log("this.imgURI",this.imgURI);
    }, (err)=> {
      console.log(err)
    })
  }

  //  Get Video
  getVideo() {
    this.isValid = false;
    this.mimeType = 'video/mp4';
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      mediaType: this.camera.MediaType.VIDEO
    }

    this.camera.getPicture(options).then((videoData)=> {
      this.videoURI = videoData;
      console.log(" this.videoURI", this.videoURI)
    },(err)=> {
      console.log(err)
    })
  }


  getLocation() {

    console.log('hit getLocation')

    this.locationAccuracy.canRequest().then((canRequest: boolean)=> {
      this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY)
      .then(()=> console.log('Request Successful'),
              err=> console.log(err))
      .catch( err=> console.log(err))
    })
    .catch(err=> console.log(err))

   
    this.geolocation.getCurrentPosition()
      .then((resp) => {
        console.log("latitude", resp.coords.latitude)
        console.log("longitude", resp.coords.longitude)

        this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude)
          .then((result: NativeGeocoderReverseResult) => {
            console.log(result);
            console.log(result[0].countryName);

            this.location_string = result[0].subLocality + ',' + result[0].subAdministrativeArea + ',' + result[0].locality + ',' + result[0].countryName || '';

            console.log(this.location_string);
          })
          .catch((error: any) => console.log(error));
      })

      .catch((err) => console.log(err))
  }

  postData()  {

    if(this.imgURI){
      this.post_img_video = this.imgURI;
    } 
    else if(this.videoURI){
      this.post_img_video = this.videoURI;
    } 

    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });

    loader.present();
    const fileTransfer: FileTransferObject = this.transfer.create();

    let options: FileUploadOptions = {
      fileKey: 'file',
      fileName: this.post_img_video.substr(this.post_img_video.lastIndexOf('/')+1),
      chunkedMode: false,
      mimeType: this.mimeType,
      headers: {Connection: "close"},
      params: {'user_id':this.user_id,'post_name':this.postDesc,'lat':this.lat,'lng':this.lang,'location_string': this.location_string}
    }
    // console.log(this.post_img_video.substr(this.post_img_video.lastIndexOf('/')+1));
    // console.log(options);

    fileTransfer.upload(this.post_img_video,'http://vps137395.vps.ovh.ca/fishbite/public/api/addPost',options).
    then((data)=> {
      // console.log(data+" Uploaded Successfully");
      loader.dismiss();
      this.presentToast("Uploaded successfully");

    },(err)=> {
      console.log("error",err);
      loader.dismiss();
    })

  }


  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 1000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
      // this.viewCtrl.dismiss();
      // this.navCtrl.popToRoot();
      this.navCtrl.setRoot(MainPage);
    });
  
    toast.present();
  }
}
