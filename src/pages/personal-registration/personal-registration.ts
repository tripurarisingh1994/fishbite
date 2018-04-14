import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController  } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ChoosePlanPremiumTrailPage } from '../choose-plan-premium-trail/choose-plan-premium-trail';
import { SocialSharing } from '@ionic-native/social-sharing';
import { LandingPage } from '../landing/landing';
import { AuthenticationProvider } from '../../providers/authentication/authentication';

@IonicPage()
@Component({
  selector: 'page-personal-registration',
  templateUrl: 'personal-registration.html',
})

export class PersonalRegistrationPage {

  private personalRegist: FormGroup;
  private friendNominee: FormGroup;
  private businessNominee: FormGroup;
  
  language="";
  country="";
  private isHiddenShare:boolean=false;
 
  private count=1;
  private count1=1;
 
  lat:number;
  lang:number;

  constructor(private navCtrl: NavController, 
    private navParams: NavParams,
    private formBuilder: FormBuilder,
    private socialShare: SocialSharing,
    private authProvider: AuthenticationProvider,
    private toastCtrl: ToastController
    ) {
     
      this.personalRegist = this.formBuilder.group({
        name: ['', Validators.required],
        address: ['', Validators.required],
        email: ['', Validators.required],
        tel: ['', Validators.required],
        password:['',Validators.required],
      });

      this.friendNominee = this.formBuilder.group({
        fnemail1: ['',],
        fnmob1: ['',],

        fnemail2: ['',],
        fnmob2: ['',],

        fnemail3: ['',],
        fnmob3: ['', ],

        fnemail4: ['',],
        fnmob4: ['',],

        fnemail5: ['',],
        fnmob5: ['', ],
      });

      this.businessNominee = this.formBuilder.group({
        
        bnemail1 :['',],
        bnmob1 :['', ],

        bnemail2 :['',],
        bnmob2 :['', ],

        bnemail3 :['', ],
        bnmob3 :['', ],

        bnemail4 :['',],
        bnmob4 :['', ],

        bnemail5 :['',],
        bnmob5 :['', ],
      })


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalRegistrationPage');
    this.language = this.navParams.get('language');
    this.country  = this.navParams.get('country');

    /**
     *  Getting Latitude and Longitude
     *  getLatLang()   return 
     */
    this.authProvider.getLatLang().subscribe(data=> {
      // console.log(data);
      this.lat = data['lat'];
      this.lang = data['lon'];
    })
  }

  /** 
   * personalReg() method
  */
  personalReg() {
    // console.log(this.personalRegist.value.name);
    // this.navCtrl.push(ChoosePlanPremiumTrailPage);

    this.authProvider.personalService(this.language,this.country,this.personalRegist.value.name,this.personalRegist.value.address,this.personalRegist.value.email,this.personalRegist.value.tel,this.personalRegist.value.password,this.lat, this.lang).subscribe(data=> {
      console.log(data);
      if(data['status']=='success') {
        this.navCtrl.push(ChoosePlanPremiumTrailPage);
        /** Reset Form */
        this.personalRegist.reset();
      } else if (data['status']=='failure') {
        this.presentToast('Email is already exist! try again');
         /** Reset Form */
        this.personalRegist.reset();
      }
    })
  }

  /**
   * showShareOptions() method
   */
  showShareOptions() {
    this.isHiddenShare = !this.isHiddenShare;
  }
 
  addFriendNominee() {
    if(this.count>=5) {
      return false;
    }
    else {
      this.count++; 
    }
   
   
  }
  createRange(number){
    let items: number[] = [];
    for(let i = 1; i <= number; i++){
       items.push(i);
    }
    return items;
  }

  addBusinessNominee() {
    if(this.count>=5) {
      return false;
    }
    else {
      this.count1++;
    }
    
  }

  createRange1(number){
    var items: number[] = [];
    for(var i = 1; i <= number; i++){
       items.push(i);
    }
    return items;
  }


  removeFriendNominee(ev,i) { 
    console.log('Working');
    let _id='friendnominee'+(i+1);
    console.log(_id);
    document.getElementById(_id).remove();

    this.friendNominee.reset();
  }

  removeBusinessNominee(ev,i) {
    console.log('working');
    let _id='businessnominee'+(i+1);
    console.log(_id)
    document.getElementById(_id).remove();

    this.businessNominee.reset();
  }

     fbCheckedFrNo(): void {
      console.log('facebook friend nominee check');
      this.socialShare.shareViaFacebook('FishBite Social App');
    }

     fbCheckedBuNo(): void {
      console.log('facebook business nominee check')
      this.socialShare.shareViaFacebook('FishBite Social App');
    }

     backToMainPage(): void {
      this.navCtrl.setRoot(LandingPage);
    }

    busiPrePay(): void {
       let val = this.businessNominee.value;
       console.log(val.bnemail1)
       console.log(val.bnemail2)
       console.log(val.bnemail3)
       console.log(val.bnemail4)
       console.log(val.bnemail5)

       console.log(val.bnmob1)
       console.log(val.bnmob2)
       console.log(val.bnmob3)
       console.log(val.bnmob4)
       console.log(val.bnmob5)
    }

    friPrePay(): void {
      let val = this.friendNominee.value;
      console.log(val.fnemail1)
      console.log(val.fnemail2)
      console.log(val.fnemail3)
      console.log(val.fnemail4)
      console.log(val.fnemail5)

      console.log(val.fnmob1)
      console.log(val.fnmob2)
      console.log(val.fnmob3)
      console.log(val.fnmob4)
      console.log(val.fnmob5)
    }


    presentToast(msg) {
      let toast = this.toastCtrl.create({
        message: msg,
        duration: 3000,
        position: 'bottom'
      });
    
      toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
    
      toast.present();
    }
}
