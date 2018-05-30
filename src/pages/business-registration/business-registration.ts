import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
// import { Profile1Page } from '../profile1/profile1';
// import { SocialSharing } from '@ionic-native/social-sharing';
import { LandingPage } from '../landing/landing';
// import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { FindFriendsOnFbPage } from '../find-friends-on-fb/find-friends-on-fb';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-business-registration',
  templateUrl: 'business-registration.html',
})
export class BusinessRegistrationPage {


  // businessRegFields = {}
  // nomineeFields = {}
  nomineeFieldsMobile = [];
  nomineeFieldsEmail = [];

  countShop=1;
  countStaff=1;
  countAmbassadors=1;

  private busiRegForm : FormGroup;

  constructor(private navCtrl: NavController,
    //  private socialShare: SocialSharing,
        // private fb: Facebook,
        private formBuilder: FormBuilder 
      ) {

        this.busiRegForm = this.formBuilder.group( {
          businessname    :['',Validators.required],
          businessaddress :['',Validators.required],
          owner           :['',Validators.required],
          email           :['',Validators.required],
          webaddress      :[''],
          mobile          :[''],
          password        :['', Validators.required],
        })
  }

  // registrationType Variable is used for storing radio button values of shops,staff,ambassadors
  registrationType='shops';

  ionViewDidLoad() {
    console.log('ionViewDidLoad BusinessRegistrationPage');
  }

  // ionSelect(event) {
  //   console.log(event);
  // }

  regTypeNgModelChange() {
    console.log(this.registrationType)
    this.nomineeFieldsMobile = [];
    this.nomineeFieldsEmail = [];
  }

  /**
   * businessReg() method
   */
  businessReg(){
    // this.navCtrl.setRoot(Profile1Page);
    console.log(this.busiRegForm.value);
    console.log(this.nomineeFieldsMobile);
    console.log(this.nomineeFieldsEmail);

    this.busiRegForm.reset();
    this.nomineeFieldsMobile= []
    this.nomineeFieldsEmail=  []
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
    this.navCtrl.push(FindFriendsOnFbPage);
  }

  fbCheckedAmbassadors(event) {
    console.log('fb ambassador check')
    this.navCtrl.push(FindFriendsOnFbPage);
  }

  backToMainPage(): void {
    this.navCtrl.setRoot(LandingPage);
  }

}
