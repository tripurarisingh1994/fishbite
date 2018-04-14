import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Profile1Page } from '../profile1/profile1';
import { SocialSharing } from '@ionic-native/social-sharing';
import { LandingPage } from '../landing/landing';

@IonicPage()
@Component({
  selector: 'page-business-registration',
  templateUrl: 'business-registration.html',
})
export class BusinessRegistrationPage {

  countShop=1;
  countStaff=1;
  countAmbassadors=1;
  constructor(private navCtrl: NavController,
     private socialShare: SocialSharing) {
  }

  // registrationType Variable is used for storing radio button values of shops,staff,ambassadors
  registrationType='shops';

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusinessRegistrationPage');
  }

  ionSelect(event) {
    console.log(event);
  }

  /**
   * businessReg() method
   */
  businessReg(){
    this.navCtrl.setRoot(Profile1Page);
  }

  addShop() {
    this.countShop++;
  }

  createShop(number){
    let items: number[] = [];
    for(let i = 1; i <= number; i++){
       items.push(i);
    }
    return items;
  }

  removeShop(ev,i) {
    console.log('working');
    let _id='shops'+(i+1);
    console.log(_id)
    document.getElementById(_id).remove();
  }

  createStaff(number) {
    let items: number[] = [];
    for(let i = 1; i <= number; i++){
       items.push(i);
    }
    return items;
  }

  removeStaff(ev,i) {
    console.log('working');
    let _id='staff'+(i+1);
    console.log(_id)
    document.getElementById(_id).remove();
  }

  addStaff() {
    this.countStaff++;
  }

  addAmbassadors() {
    this.countAmbassadors++;
  }

  removeAmbassadors(ev,i) {
    console.log('working');
    let _id='ambassadors'+(i+1);
    console.log(_id)
    document.getElementById(_id).remove();
  }

  createAmbassadors(number) {
    let items: number[] = [];
    for(let i = 1; i <= number; i++){
       items.push(i);
    }
    return items;
  }

  fbCheckedStaff(): void {
    console.log('fb staff check');
    this.socialShare.shareViaFacebook('FishBite Social Share')
  }

  fbCheckedAmbassadors(): void {
    console.log('fb ambassador check')
    this.socialShare.shareViaFacebook('FishBite Social Share')
  }

  backToMainPage(): void {
    this.navCtrl.setRoot(LandingPage);
  }

}
