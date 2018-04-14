import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AddTripSearchMemberPage } from '../add-trip-search-member/add-trip-search-member';
import { AddWaterwaySelectWaterwayPage } from '../add-waterway-select-waterway/add-waterway-select-waterway';
import { AddServicesProvider } from '../../providers/add-services/add-services';
import { FileTransfer, FileUploadOptions, FileTransferObject} from '@ionic-native/file-transfer';

@IonicPage()
@Component({
  selector: 'page-add-trip',
  templateUrl: 'add-trip.html',
})
export class AddTripPage {

  imgURI:any='';
  imageName:any;


  lat:number;   // Storing latitude
  lng:number;   // Storing longitude

  startDate               // startDate used as [(ngModel)]
  endDate                 // endDate used as [(ngModel)]


  /**
   * Select Waterways Page
   * variable   waterway_id 
   * variable   waterway_name
   */

  waterway_id:number;
  waterway_name:string;


   /**
   * Search Members Page
   * array   members_id=[] 
   * array   members_name=[]
   */

   members_id:number[] = [];
   members_name:string[] = [];


   user_id:number=1;

  constructor(
              private navCtrl: NavController,
              private camera: Camera,
              private addServicePro: AddServicesProvider,
              private transfer: FileTransfer,
              private loadingCtrl: LoadingController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTripPage');

    /**
     * Logged in user id push members_id array
     * Logged in user name push in members_name array
     * 
     * work,  set it dynamically
     */
   this.members_id.push(1);
   this.members_name.push('euphern');
        
  }

  openGallery (): void {
    let cameraOptions: CameraOptions = {
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.FILE_URI,      
      quality: 50,
      mediaType:this.camera.MediaType.PICTURE,
      encodingType: this.camera.EncodingType.JPEG,
    }
  
    this.camera.getPicture(cameraOptions).then((imgData)=> {
      this.imgURI = imgData;

      this.imageName = this.imgURI.substr(this.imgURI.lastIndexOf('/')+1)
  
    }, (err)=> {
      console.log("err",err)
    });
     
  }

  goWaterWay(): void {
    this.navCtrl.push(AddWaterwaySelectWaterwayPage);
  }


  addMember(): void {     // It trigger when click of + icon of Member 
    this.navCtrl.push(AddTripSearchMemberPage);
  }


  ionViewWillEnter() {
    this.waterway_id   = this.addServicePro.water_id;
    this.waterway_name = this.addServicePro.water_name;


    for(let i = 0; i < this.addServicePro.member_id.length; i++) {
      console.log(this.addServicePro.member_id[i])
      console.log(this.addServicePro.member_name[i])

      this.members_id.push(this.addServicePro.member_id[i]);
      this.members_name.push(this.addServicePro.member_name[i])
    }
  }


  saveTrip(name, desc) {
    let loader = this.loadingCtrl.create({
      content: "Uploading..."
    });
  
    loader.present();
  
    const fileTransfer: FileTransferObject = this.transfer.create();
  
      let options: FileUploadOptions = {
        fileKey: 'file',
        fileName: this.imageName,
        chunkedMode: false,
        headers: {Connection: 'close'},
        params: {'user_id':this.user_id,'trip_name':name,'description':desc, 'waterway_id':this.waterway_id, 'start_date':this.startDate, 'end_date':this.endDate, 'members':JSON.stringify(this.members_id), 'lat':this.lat, 'lng':this.lng}
      }

      console.log(options);
      console.log(this.imageName);
  
      fileTransfer.upload(this.imgURI,'http://192.168.200.6/fishbite/public/api/addTrip',options).then((data)=> {
        console.log(data)
        
        let res = JSON.parse(data.response)

        console.log(res.status)

        if(res.status=='success') {
          if(this.navCtrl.canGoBack()) {
             this.navCtrl.pop();
          }
        }
        
        loader.dismiss();
      },(err)=> {
        console.log("err",err);
        loader.dismiss();
      })
  }

}
