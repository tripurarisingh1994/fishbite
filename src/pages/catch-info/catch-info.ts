import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ViewController, ToastController, Platform } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { BaitsPage } from '../baits/baits';
import { FishSpeciesPage } from '../fish-species/fish-species';
import { CatchInfoProvider } from '../../providers/catch-info/catch-info';
import { AddWaterwaySelectWaterwayPage } from '../add-waterway-select-waterway/add-waterway-select-waterway';
import { AddServicesProvider } from '../../providers/add-services/add-services';
import { SelectTripPage } from '../select-trip/select-trip';
import { FileTransfer, FileTransferObject, FileUploadOptions } from '@ionic-native/file-transfer';
import { Geolocation } from '@ionic-native/geolocation';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { NativeGeocoder, NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';
import { Storage } from '@ionic/storage';
import { FilePath } from '@ionic-native/file-path';


@IonicPage()
@Component({
  selector: 'page-catch-info',
  templateUrl: 'catch-info.html',
})
export class CatchInfoPage {

  user_id: number;

  note: string='';

  isNoteHidden: boolean = true;

  lat: number;
  lng: number;

  private imageSrc: string = '';

  catchDate: string;

  bait_id: number;
  bait_name: string;

  species_id: number;
  species_name: string;

  water_way_id: number;
  water_way_name: string;

  trip_id: number;
  trip_name: string;

  location_string: string; // it contains subLocality, subAdministrativeArea, Locality, countryName


  constructor(private navCtrl: NavController,
    private navParams: NavParams,
    private camera: Camera,
    private catchInfoPro: CatchInfoProvider,
    private addServicePro: AddServicesProvider,
    private loadingCtrl: LoadingController,
    private transfer: FileTransfer,
    private viewCtrl: ViewController,
    private toastCtrl: ToastController,
    private geolocation: Geolocation,
    private platform: Platform,
    private locationAccuracy: LocationAccuracy,
    private nativeGeocoder: NativeGeocoder,
    private storage: Storage,
    private filePath: FilePath, ) {

    // Or to get user_id
    this.storage.get('user_id').then((val) => {
      console.log('user_id', val);
      this.user_id = val;
    });

    this.platform.ready()
      .then(() => {

        this.locationAccuracy.canRequest()
          .then((canRequest: boolean) => {
            if (canRequest) {
              this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY)
                .then(() => {
                  console.log('Request Successful')

                }, (err) => console.log(err))
                .catch((err) => console.log(err))
            }
          })
          .catch((err) => console.log(err))

      })
      .catch((err) => console.log(err))

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CatchInfoPage');
    this.addServicePro.getLatLang().subscribe(data => {
      this.lat = data['lat'];
      this.lng = data['lon'];
    });
  }

  openGallery(): void {
    let cameraOptions: CameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,
      quality: 50,
      encodingType: this.camera.EncodingType.JPEG,
    }

    this.camera.getPicture(cameraOptions).then((imageData) => {

      if (this.platform.is('android')) {
        this.filePath.resolveNativePath(imageData)
          .then(filePath => {
            console.log(filePath)

            this.imageSrc = filePath;
          })
          .catch(err => console.log(err));
      }
      else {
        this.imageSrc = imageData;
      }

      console.log("this.imageSrc", this.imageSrc);
    }, (err) => {
      console.log(err)
    })

  }



  //When Click on Bait then redirect on BaitsPage
  goBaits() {
    this.navCtrl.push(BaitsPage);
  }

  selectSpecies() {
    this.navCtrl.push(FishSpeciesPage);
  }

  ionViewWillEnter() {
    this.bait_id = this.catchInfoPro.bait_id;
    this.bait_name = this.catchInfoPro.bait_name;

    this.species_id = this.catchInfoPro.species_id;
    this.species_name = this.catchInfoPro.species_name;

    this.water_way_id = this.addServicePro.water_id;
    this.water_way_name = this.addServicePro.water_name;

    this.trip_id = this.catchInfoPro.trip_id;
    this.trip_name = this.catchInfoPro.trip_name;
  }


  selectWaterWay() {
    this.navCtrl.push(AddWaterwaySelectWaterwayPage);
  }

  goTrip() {
    this.navCtrl.push(SelectTripPage);
  }

  saveCatchInfo(postDesc, weight, length) {

    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });

    loader.present();
    const fileTransfer: FileTransferObject = this.transfer.create();

    let options: FileUploadOptions = {
      fileKey: 'file',
      fileName: this.imageSrc.substr(this.imageSrc.lastIndexOf('/') + 1),
      chunkedMode: false,
      headers: { Connection: "close" },
      params: { 'user_id': this.user_id, 'post_name': postDesc, 'catch_length': length, 'catch_weight': weight, 'species_id': this.species_id, 'bait_id': this.bait_id, 'trip_id': this.trip_id, 'lat': this.lat, 'lng': this.lng, 'location_string': this.location_string, 'note': this.note }
    }


    fileTransfer.upload(this.imageSrc, 'http://vps137395.vps.ovh.ca/fishbite/public/api/addCatch', options)
      .then((data) => {
        console.log(data);
        loader.dismiss();
        this.presentToast('Uploaded Successfully');

        /*
        * Reset of data of provider
        * */

        this.catchInfoPro.bait_id = null;
        this.catchInfoPro.bait_name = '';

        this.catchInfoPro.species_id = null;
        this.catchInfoPro.species_name = '';

        this.addServicePro.water_id = null;
        this.addServicePro.water_name = '';

        this.catchInfoPro.trip_id = null;
        this.catchInfoPro.trip_name = '';

      }, (err) => {
        console.log("error", err)
        loader.dismiss();

          /*
        * Reset of data of provider
        * */

       this.catchInfoPro.bait_id = null;
       this.catchInfoPro.bait_name = '';

       this.catchInfoPro.species_id = null;
       this.catchInfoPro.species_name = '';

       this.addServicePro.water_id = null;
       this.addServicePro.water_name = '';

       this.catchInfoPro.trip_id = null;
       this.catchInfoPro.trip_name = '';
       
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
      this.viewCtrl.dismiss();
    });

    toast.present();
  }


  hitGps() {    // This function when call then click on GPS public spot
    console.log('hitGps')

    this.geolocation.getCurrentPosition()
      .then((resp) => {
        console.log("latitude", resp.coords.latitude)
        console.log("longitude", resp.coords.longitude)

        this.nativeGeocoder.reverseGeocode(resp.coords.latitude, resp.coords.longitude)
          .then((result: NativeGeocoderReverseResult) => {
            console.log(result);
            console.log(result[0].countryName);

            this.location_string = result[0].subLocality + ',' + result[0].subAdministrativeArea + ',' + result[0].locality + ',' + result[0].countryName;

            console.log(this.location_string);
          })
          .catch((error: any) => console.log(error));
      })

      .catch((err) => console.log(err))
  }


  openNote() {  // It call when click on Note Item
    this.isNoteHidden = !this.isNoteHidden;
  }

}
