import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';


@IonicPage()
@Component({
  selector: 'page-kyndofishing-popover',
  templateUrl: 'kyndofishing-popover.html',
})
export class KyndofishingPopoverPage {

  constructor(private navCtrl: NavController,
     private navParams: NavParams,
     private inAppBrowser: InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KyndofishingPopoverPage');
  }

  goHome():void {
    const options: InAppBrowserOptions = {
      zoom :'no'
    }
    const browser = this.inAppBrowser.create('http://www.kaydofishingworld.com/','_self',options);
  }

  goFishTalk() {
    const options: InAppBrowserOptions = {
      zoom :'no'
    }
    const browser = this.inAppBrowser.create('http://www.kaydofishingworld.com/fish-talk/','_self',options);
  }

  goFishProTips() {
    const options: InAppBrowserOptions = {
      zoom :'no'
    }
    const browser = this.inAppBrowser.create('http://www.kaydofishingworld.com/fishing-pro-tips/','_self',options);
  }

  goFishProductTalk() {
    const options: InAppBrowserOptions = {
      zoom :'no'
    }
    const browser = this.inAppBrowser.create('http://www.kaydofishingworld.com/fishing-product-talk/','_self',options);
  }

  goKayaking() {
    const options: InAppBrowserOptions = {
      zoom :'no'
    }
    const browser = this.inAppBrowser.create('http://www.kaydofishingworld.com/kayaking/','_self',options);
  }

  goBoating() {
    const options: InAppBrowserOptions = {
      zoom :'no'
    }
    const browser = this.inAppBrowser.create('http://www.kaydofishingworld.com/boating/','_self',options);
  }
  goKaydoTv() {
    const options: InAppBrowserOptions = {
      zoom :'no'
    }
    const browser = this.inAppBrowser.create('http://www.kaydofishingworld.com/kaydo-tv/','_self',options);
  }

}
