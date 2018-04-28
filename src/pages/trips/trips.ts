import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddServicesProvider } from '../../providers/add-services/add-services';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-trips',
  templateUrl: 'trips.html',
})
export class TripsPage {

  user_id:number;
  offset:number=0;

  tripData = []
  endDate
  todayDate
  trip_status=[]
  

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private addServicePro: AddServicesProvider,
              private storage: Storage) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TripsPage');


    this.storage.get('user_id').then((val) => {
        console.log('user_id', val);
        this.user_id = val;

        this.addServicePro.getTrip(this.user_id,this.offset).subscribe(data=>{
          console.log(data);
    
          this.todayDate = new Date();
    
          this.tripData = data['data'];
    
         
    
          for(let i=0; i<this.tripData.length; i++) {
    
            console.log(this.tripData[i].ending_date)
    
            this.endDate = new Date(this.tripData[i].ending_date);
    
            console.log("endDate",this.endDate)
            console.log("todatDate",this.todayDate)
    
    
            if(this.endDate - this.todayDate <= 0) {
              console.log(this.endDate - this.todayDate)
              this.trip_status.push('Ended')
            }
            else {
              console.log(this.endDate - this.todayDate)
              this.trip_status.push('Ongoing');
            }
    
          }
    
          console.log("tripData",this.tripData)
          console.log("tripData",this.tripData[0].name)
    
          console.log("tripStatus",this.trip_status);
    
        })
    
   });

   
  }

}
