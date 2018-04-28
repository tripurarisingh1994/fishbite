import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ViewController, LoadingController } from 'ionic-angular';
import { FishingMethodsPage } from '../fishing-methods/fishing-methods';
import { CatchInfoProvider } from '../../providers/catch-info/catch-info';
import { CountriesPage } from '../countries/countries';
import { AuthenticationProvider } from '../../providers/authentication/authentication';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  lng: number;
  lat: number;

  gender:string;

  fishingMethod_id = [];
  countryName:string;

  dob:string;

  user_id:number;

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private alertCtrl: AlertController,
              private viewCtrl: ViewController,
              private catchInfoPro: CatchInfoProvider,
              private authPro: AuthenticationProvider,
              private loadingCtrl: LoadingController,
              private storage: Storage) {

      //get user_id
      this.storage.get('user_id').then((val) => {
        console.log('user_id', val);
        this.user_id = val;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');

    this.authPro.getLatLang().subscribe(data=> {
      this.lat = data['lat'];
      this.lng = data['lon'];
    });
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  save(fullname, username, bio, mail) {

    // console.log(fullname)
    // console.log(username)
    // console.log(bio)
    // console.log(mail)
    // console.log(this.gender)
    // console.log(this.fishingMethod_id)
    // console.log(this.countryName)
    // console.log(this.dob)

    let loading = this.loadingCtrl.create();

    loading.present();

    this.authPro.editProfile(this.user_id, fullname, username, this.countryName, this.fishingMethod_id, mail, this.gender, this.dob, this.lat, this.lng).subscribe(data=> {
      console.log(data);

      loading.dismiss();

      loading.onDidDismiss(()=> {
        this.navCtrl.pop();
      })
    },
    ((err)=> {
      console.log(err)
      loading.dismiss();
    }));

    this.catchInfoPro.fishingMethods_Id = []; // rest the value of array @fishingMethods in catch-info providers
  }

  goFishingMethods() {
    this.navCtrl.push(FishingMethodsPage);
  }

  goCountry() {
    this.navCtrl.push(CountriesPage);
  }

  genderAlert() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Gender');

    alert.addInput({
      type: 'radio',
      label: 'Male',
      value: 'male',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Female',
      value: 'female',
    });

    alert.addButton('Cancel');

    alert.addButton({
      text: 'OK',
      handler: data => {
        this.gender = data;
        console.log("gender",this.gender)
      }
    });
    alert.present();
  }

  ionViewWillEnter() {
    this.fishingMethod_id = []

    if( this.catchInfoPro.fishingMethods_Id && this.catchInfoPro.countryName) {
      
      this.fishingMethod_id = this.catchInfoPro.fishingMethods_Id;
      console.log(this.catchInfoPro.fishingMethods_Id)
  
      this.countryName = this.catchInfoPro.countryName;
      console.log(this.catchInfoPro.countryName)
    }
  
  }

}
