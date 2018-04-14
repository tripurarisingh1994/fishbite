import { Component } from '@angular/core';
import { IonicPage, LoadingController, ToastController } from 'ionic-angular';
import { AddServicesProvider } from '../../providers/add-services/add-services';

@IonicPage()
@Component({
  selector: 'page-add-waterway',
  templateUrl: 'add-waterway.html',
})
export class AddWaterwayPage {

  lat:number;              // Assign the Latitude
  lang:number;            //  Assign the Logitude

  user_id:number=1;

  constructor(private addServiceProvider: AddServicesProvider,
              private loadingCtrl: LoadingController,
              private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddWaterwayPage');
    this.addServiceProvider.getLatLang().subscribe(data=> {
      this.lat = data['lat'];
      this.lang = data['lon'];
    })
  }


  save(name,desc): void {             // It trigger when click on SAVE button
    let loading = this.loadingCtrl.create({
      content: 'Uploading...'
    });
    loading.present();

    this.addServiceProvider.addWaterWaysService(name, desc, this.user_id, this.lat, this.lang).subscribe(data=> {
      console.log(data);
      loading.dismiss();

      if(data['status']=='success') {
        this.presentToast('Uploaded Successfully');
       }
    },(err)=> {
      console.log("err",err)
      loading.dismiss();
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
