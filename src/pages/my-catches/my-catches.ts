import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AddServicesProvider } from '../../providers/add-services/add-services';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-my-catches',
  templateUrl: 'my-catches.html',
})
export class MyCatchesPage {

  user_id: number;
  catchData: string[] = [];

  constructor(private navCtrl: NavController,
    private navParams: NavParams,
    private addServicePro: AddServicesProvider,
    private storage: Storage,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyCatchesPage');

    //  get user_id
    this.storage.get('user_id').then((val) => {
      console.log('user_id', val);
      this.user_id = val;

      let loading = this.loadingCtrl.create();
      loading.present();
      this.addServicePro.getCatch(this.user_id).subscribe(data => {
        console.log(data);
        console.log(data['data']);
        this.catchData = data['data'];
        loading.dismiss();
      })

    });

  }

}
