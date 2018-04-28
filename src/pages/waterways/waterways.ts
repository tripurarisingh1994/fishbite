import { Component, ViewChildren } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddServicesProvider } from '../../providers/add-services/add-services';
import { Storage } from '@ionic/storage';



@IonicPage()
@Component({
  selector: 'page-waterways',
  templateUrl: 'waterways.html',
})
export class WaterwaysPage {

   user_id: number;

   waterways = []

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private addServicePro: AddServicesProvider,
    private storage: Storage) {

      // Or to get user_id
      this.storage.get('user_id').then((val) => {
        console.log('user_id', val);
        this.user_id = val;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WaterwaysPage');
    this.addServicePro.getWaterways(this.user_id).subscribe(data => {
      this.waterways = data['waterway']
      console.log("waterways",this.waterways)
    })

  }

}
