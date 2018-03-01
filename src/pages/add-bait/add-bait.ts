import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-add-bait',
  templateUrl: 'add-bait.html',
})
export class AddBaitPage {

  constructor(private navCtrl: NavController, 
              private navParams: NavParams,
              private camera: Camera) {
  }
  private imageSrc:string='';
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddBaitPage');
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
