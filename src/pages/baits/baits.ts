import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddServicesProvider } from '../../providers/add-services/add-services';
import { CatchInfoProvider } from '../../providers/catch-info/catch-info';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-baits',
  templateUrl: 'baits.html',
})
export class BaitsPage {

  user_id:number;

  baits:string[] = [];
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private addServicePro: AddServicesProvider,
     private catchInfoPro: CatchInfoProvider,
     private storage: Storage) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BaitsPage');

       // get user_id
       this.storage.get('user_id').then((val) => {
        console.log('user_id', val);
        this.user_id = val;

        this.addServicePro.getBaitData(this.user_id).subscribe(data=> {
          console.log(data);
          this.baits = data['data'];
  
        })
        
      });
  }

  selectBait(bait_name, bait_id) {
    console.log("bait_name",bait_name);
    console.log("bait_id",bait_id);

    this.catchInfoPro.bait_id   = bait_id;
    this.catchInfoPro.bait_name = bait_name;

    this.navCtrl.pop();

  }


}
