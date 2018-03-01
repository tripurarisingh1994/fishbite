import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RegistrationProvider } from '../../providers/registration/registration';
import { ChoosePlanPremiumTrailPage } from '../choose-plan-premium-trail/choose-plan-premium-trail';

@IonicPage()
@Component({
  selector: 'page-personal-registration',
  templateUrl: 'personal-registration.html',
})

export class PersonalRegistrationPage {

  // @ViewChild('friendnominee') frn;
  public personalRegist: FormGroup;
  
  language="";
  country="";
  isHiddenShare:boolean=false;
 
  count=1;
  count1=1;
 

  //  fnEmailLoop=['fnemail1','fnemail2','fnemail3','fnemail4','fnemail5'];
  //   fnMobLoop=['fnmob1','fnmob2','fnmob3','fnmob4','fnmob5'];

  //   bnEmailLoop=['bnemail1','bnemail2','bnemail3','bnemail4','bnemail5'];
  //  bnMobLoop=['bnmob1','bnmob2','bnmob3','bnmob4','bnmob5'];

  // fnEmail=[];
  // fnMob=[];

  // bnEmail=[];
  // bnMob=[];


  constructor(private navCtrl: NavController, 
    private navParams: NavParams,
    private formBuilder: FormBuilder,
    private registration:RegistrationProvider,
    ) {
     
      this.personalRegist = this.formBuilder.group({
        name: ['', Validators.required],
        address: ['', Validators.required],
        email: ['', Validators.required],
        tel: ['', Validators.required],

        fnemail1  : ['', Validators.required],
        fnmob1: ['', Validators.required],

        fnemail2  : ['', Validators.required],
        fnmob2: ['', Validators.required],

        fnemail3  : ['', Validators.required],
        fnmob3: ['', Validators.required],

        fnemail4  : ['', Validators.required],
        fnmob4: ['', Validators.required],

        fnemail5  : ['', Validators.required],
        fnmob5: ['', Validators.required],

        bnemail1 :['', Validators.required],
        bnmob1 :['', Validators.required],

        bnemail2 :['', Validators.required],
        bnmob2 :['', Validators.required],

        bnemail3 :['', Validators.required],
        bnmob3 :['', Validators.required],

        bnemail4 :['', Validators.required],
        bnmob4 :['', Validators.required],

        bnemail5 :['', Validators.required],
        bnmob5 :['', Validators.required],
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalRegistrationPage');
    this.language = this.navParams.get('language');
    this.country  = this.navParams.get('country');

  }

  /** 
   * personalReg() method
  */
  personalReg() {
    // console.log(this.personalRegist);

    // console.log(this.personalRegist.value.name);
    // console.log(this.personalRegist.value.address);
    // console.log(this.personalRegist.value.email);
    // console.log(this.personalRegist.value.tel);
    
    // console.log(this.personalRegist.value.fnemail1);
    // console.log(this.personalRegist.value.fnmob1);

    // console.log(this.personalRegist.value.fnemail2);
    // console.log(this.personalRegist.value.fnmob2);

    // console.log(this.personalRegist.value.fnemail3);
    // console.log(this.personalRegist.value.fnmob3);

    // console.log(this.personalRegist.value.fnemail4);
    // console.log(this.personalRegist.value.fnmob4);

    // console.log(this.personalRegist.value.fnemail5);
    // console.log(this.personalRegist.value.fnmob5);


    // console.log(this.personalRegist.value. bnemail1);
    // console.log(this.personalRegist.value.bnmob1);

    // console.log(this.personalRegist.value. bnemail2);
    // console.log(this.personalRegist.value.bnmob2);

    // console.log(this.personalRegist.value. bnemail3);
    // console.log(this.personalRegist.value.bnmob3);

    // console.log(this.personalRegist.value. bnemail4);
    // console.log(this.personalRegist.value.bnmob4);

    // console.log(this.personalRegist.value. bnemail5);
    // console.log(this.personalRegist.value.bnmob5);
   
   /*Working Code start*/

    // let test = this.personalRegist.value;
    // console.log(test);

  /*Working Code end*/

  // for(let i=1; i<=this.count; ++i) {
    //  let test = this.fnEmail[i];
    // console.log(this.personalRegist.value.test)
    // console.log(this.personalRegist.value.fnmob+i)

    // if(this.personalRegist.value.fnemail+i != '' || this.personalRegist.value.fnemail+i != null || this.personalRegist.value.fnemail+i != undefined) {
    //   console.log(i)
    //   this.fnEmail.push(this.personalRegist.value.fnemail+i)
    //   console.log(this.fnEmail[i])
    // }
    // if(this.personalRegist.value.fnmob+i != '' || this.personalRegist.value.fnmob+i != null || this.personalRegist.value.fnmob+i != undefined) {
    //   console.log(i)
    //   this.fnMob.push(this.personalRegist.value.fnmob+i)
    //   console.log(this.fnMob[i])
    // }
  // }

  // for(let i=1; i<=this.count1; ++i) {
    // if(this.personalRegist.value.bnemail+i != '' || this.personalRegist.value.bnemail+i != null || this.personalRegist.value.bnemail+i != undefined) {
    //   console.log(i)
    //   this.bnEmail.push(this.personalRegist.value.bnemail+i)
    //   console.log(this.bnEmail[i])
    // }
    // if(this.personalRegist.value.bnmob+i != '' || this.personalRegist.value.bnmob+i != null || this.personalRegist.value.bnmob+i != undefined) {
    //   console.log(i)
    //   this.bnMob.push(this.personalRegist.value.bnmob+i)
    //   console.log(this.bnMob[i])
    // }
  // }
    //  this.registration.personalRegistration(this.language,this.country,this.personalRegist.value.name,this.personalRegist.value.address,this.personalRegist.value.email,this.personalRegist.value.tel,this.fnEmail,this.fnMob,this.bnEmail,this.bnMob).subscribe(data=> {
    //   console.log(data);
    // })

    /* working code start */
    //  this.registration.personalRegistration(test).subscribe(data=> {
    //   console.log(data);
    // })
    /* working code end */

    /*Design Flow*/
    this.navCtrl.push(ChoosePlanPremiumTrailPage);
  }

  /**
   * showShareOptions() method
   */
  showShareOptions() {
    this.isHiddenShare = !this.isHiddenShare;
  }
 
  addFriendNominee() {
    this.count++; 
  }
  createRange(number){
    let items: number[] = [];
    for(let i = 1; i <= number; i++){
       items.push(i);
    }
    return items;
  }

  addBusinessNominee() {
    this.count1++;
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
  }

  removeBusinessNominee(ev,i) {
    console.log('working');
    let _id='businessnominee'+(i+1);
    console.log(_id)
    document.getElementById(_id).remove();
  }
}
