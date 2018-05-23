import { Component } from '@angular/core';
import { IonicPage, NavController, PopoverController } from 'ionic-angular';
// import { NotificationPage } from '../notification/notification';
// import { KyndofishingPopoverPage } from '../kyndofishing-popover/kyndofishing-popover';
// import { DiscoverPage } from '../discover/discover';
import { Storage } from '@ionic/storage';
import { LandingPage } from '../landing/landing';


@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  constructor(private navCtrl: NavController, 
    // private popoverCtrl: PopoverController,
       private storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

//   goNotification(): void {
//     this.navCtrl.push(NotificationPage);
//   }

//   goDiscover(): void {
//     this.navCtrl.push(DiscoverPage);
//   }

//   popoverKyndofishing(event) {
//     let popover = this.popoverCtrl.create(KyndofishingPopoverPage);
//     popover.present({
//       ev:event
//     });
//     console.log('working');
// }

  logout() {
    this.storage.remove('user_id').then(()=> {
      this.storage.remove('user_name')
      this.navCtrl.setRoot(LandingPage);
    })
    
  }
}
