import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SuperTabs } from 'ionic2-super-tabs';
import { AddNewPage } from '../add-new/add-new';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {
 
  pages = [
    { pageName: 'HomePage', title: 'Home', id: 'homeTab'},
    { pageName: 'FishIntelPage', title: 'Fishing Intel',id: 'fishIntelTab'},
    { pageName: 'NotificationPage', title: 'Notifications',  id: 'notficationTab'},
    { pageName: 'LiveStreamingPage', title: 'Live Streaming', id: 'liveStreamingTab'},
    { pageName: 'DiscoverPage', title: 'Discovery', id: 'discoverTab'},
    { pageName: 'KyndofishingPopoverPage', title: 'Community Website',id: 'kyndofishingTab'},
    // { pageName: 'Profile1Page', title: 'Business Profile',id: 'buProTab'},
    { pageName: 'ProfilePage', title: 'Personal Profile',id: 'peProTab'},
  ];
 
  selectedTab = 0;
 
  @ViewChild(SuperTabs) superTabs: SuperTabs;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  onTabSelect(ev: any) {
    // if (ev.index === 2) {
    //   let alert = this.alertCtrl.create({
    //     title: 'Secret Page',
    //     message: 'Are you sure you want to access that page?',
    //     buttons: [
    //       {
    //         text: 'No',
    //         handler: () => {
    //           this.superTabs.slideTo(this.selectedTab);
    //         }
    //       }, {
    //         text: 'Yes',
    //         handler: () => {
    //           this.selectedTab = ev.index;
    //         }
    //       }
    //     ]
    //   });
    //   alert.present();
    // } else {
      this.selectedTab = ev.index;
      this.superTabs.clearBadge(this.pages[ev.index].id);
    // }
  }

  fabHit(): void {
   this.navCtrl.push(AddNewPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

}
