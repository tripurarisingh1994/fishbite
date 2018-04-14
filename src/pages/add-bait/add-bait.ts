import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AddServicesProvider } from '../../providers/add-services/add-services';
import { FileTransfer, FileUploadOptions, FileTransferObject} from '@ionic-native/file-transfer';


@IonicPage()
@Component({
  selector: 'page-add-bait',
  templateUrl: 'add-bait.html',
})
export class AddBaitPage {

  imgURI:any;
  user_id:number=1;
  imageName:any;

  constructor(private navCtrl: NavController, 
              private camera: Camera,
              private loadingCtrl: LoadingController,
              private toastCtrl: ToastController,
              private addServiceProvider: AddServicesProvider,
              private transfer: FileTransfer) {
  }

  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddBaitPage');
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
      this.imgURI = imgData

      this.imageName = this.imgURI.substr(this.imgURI.lastIndexOf('/')+1);
    }, (err)=> {
        console.log("err",err)
    });
   
  }

  save(name, desc) {

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
        params: {'user_id':this.user_id,'name':name,'desc':desc}
      }

      console.log(options);
      console.log(this.imageName);
  
      fileTransfer.upload(this.imgURI,'http://192.168.200.6/fishbite/public/api/addBait',options).then((data)=> {
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

  // present Toast 
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }


}
