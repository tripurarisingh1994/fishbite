import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddServicesProvider } from '../../providers/add-services/add-services';
import { CatchInfoProvider } from '../../providers/catch-info/catch-info';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-select-trip',
  templateUrl: 'select-trip.html',
})
export class SelectTripPage {

  user_id:number;
  offest:number  = 0;

  trips:string[]=[]

  constructor(public navCtrl: NavController,
               public navParams: NavParams,
               private addServicePro: AddServicesProvider,
               private catchInfoPro: CatchInfoProvider,
               private storage: Storage) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectTripPage');

    this.storage.get('user_id').then((val) => {
      console.log('user_id', val);
      this.user_id = val;

      this.addServicePro.getTrip(this.user_id, this.offest).subscribe(data=> {
        console.log(data);
        this.trips = data['data'];
      })
      
    });

   
  }

  selectTrip(trip_id, trip_name, waterway) {
    console.log(trip_id)
    console.log(trip_name)
    console.log(waterway.id)
    console.log(waterway.name)
  
    this.catchInfoPro.trip_id        = trip_id;
    this.catchInfoPro.trip_name      = trip_name;
    // this.catchInfoPro.waterway_id    = waterway.id;
    // this.catchInfoPro.waterway_name  = waterway.name;
    this.addServicePro.water_id       = waterway.id;
    this.addServicePro.water_name     = waterway.name;

    this.navCtrl.pop();

  }

}

