import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';


@IonicPage()
@Component({
  selector: 'page-catch-info',
  templateUrl: 'catch-info.html',
})
export class CatchInfoPage {

  private imageSrc:string='';

  constructor(private navCtrl: NavController, 
              private navParams: NavParams,
              private camera: Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CatchInfoPage');
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

}
