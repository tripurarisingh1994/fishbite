import { Component } from '@angular/core';
import { IonicPage, LoadingController, ToastController, NavController } from 'ionic-angular';
import { AddServicesProvider } from '../../providers/add-services/add-services';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-add-waterway',
  templateUrl: 'add-waterway.html',
})
export class AddWaterwayPage {

  lat:number;              // Assign the Latitude
  lang:number;            //  Assign the Logitude

  user_id:number;

  constructor(private navCtrl: NavController,
              private addServiceProvider: AddServicesProvider,
              private loadingCtrl: LoadingController,
              private toastCtrl: ToastController,
              private storage: Storage) {

        // Or to get user_id
        this.storage.get('user_id').then((val) => {
          console.log('user_id', val);
          this.user_id = val;
        });
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
      duration: 1000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
      this.navCtrl.pop();
    });
  
    toast.present();
  }


}
