import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AddServicesProvider } from '../../providers/add-services/add-services';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-moments',
  templateUrl: 'moments.html',
})
export class MomentsPage {

  offset:number=0;
  momentsData = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private addServicePro: AddServicesProvider,
              private storage: Storage,
              private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MomentsPage');

    this.storage.get('user_id').then((user_id)=> {
      console.log(user_id)
      this.loadMoments(user_id);
    })
   
  }

  loadMoments(user_id) {
    let loading = this.loadingCtrl.create();
    loading.present();

    this.addServicePro.getMoments(user_id,this.offset).subscribe(data=> {
      console.log(data)
      this.momentsData = data['data'];
       console.log("moments",this.momentsData);
      loading.dismiss();
    })
  }

}
