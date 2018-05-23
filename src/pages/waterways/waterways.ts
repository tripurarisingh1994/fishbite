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

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WaterwaysPage');

       this.storage.get('user_id').then((user_id) => {
        console.log('user_id', user_id);
        this.user_id = user_id;

        this.addServicePro.getWaterways(this.user_id).subscribe(data => {
          this.waterways = data['waterway']
          console.log("waterways",this.waterways)
        })

      });


  }

}
