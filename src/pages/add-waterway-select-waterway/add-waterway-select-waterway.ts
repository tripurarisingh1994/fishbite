import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AddServicesProvider } from '../../providers/add-services/add-services';


@IonicPage()
@Component({
  selector: 'page-add-waterway-select-waterway',
  templateUrl: 'add-waterway-select-waterway.html',
})
export class AddWaterwaySelectWaterwayPage {

  isVisibleSearchBar:boolean=false;

  waterways:string[];

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private addServicePro:AddServicesProvider,
              private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddWaterwaySelectWaterwayPage');
  }

  showSearchBar() {
    this.isVisibleSearchBar = !this.isVisibleSearchBar;
  }

  getWaterWay(ev: any) {
    
    let val = ev.target.value;
    this.waterways = [];

    if(val!='') {
      let loading = this.loadingCtrl.create({ });

      loading.present();
       this.addServicePro.searchWaterWay(val).subscribe(data=> {
         console.log(data)
       
        console.log(data['data']);
        this.waterways = data['data'];  
        
        loading.dismiss();
      },(err)=> {
        console.log("err",err)
        loading.dismiss();
      })
    } 
  }


  selectWaterWayItem(w_id, w_name) { // Waterway item click
    if(this.navCtrl.canGoBack()) {
      
      this.addServicePro.water_id   = w_id;
      this.addServicePro.water_name = w_name;

      this.navCtrl.pop();
    }
  }
 

}
