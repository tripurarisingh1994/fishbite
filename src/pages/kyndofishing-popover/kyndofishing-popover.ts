import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';


@IonicPage()
@Component({
  selector: 'page-kyndofishing-popover',
  templateUrl: 'kyndofishing-popover.html',
})
export class KyndofishingPopoverPage {

  constructor(
     private inAppBrowser: InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KyndofishingPopoverPage');
  }

  goHome():void {
    let options: InAppBrowserOptions = {
      zoom :'no'
    }
    this.inAppBrowser.create('http://www.kaydofishingworld.com/','_self',options);
  }

  goFishTalk() {
    let options: InAppBrowserOptions = {
      zoom :'no'
    }
    this.inAppBrowser.create('http://www.kaydofishingworld.com/fish-talk/','_self',options);
  }

  goFishProTips() {
    let options: InAppBrowserOptions = {
      zoom :'no'
    }
    this.inAppBrowser.create('http://www.kaydofishingworld.com/fishing-pro-tips/','_self',options);
  }

  goFishProductTalk() {
    let options: InAppBrowserOptions = {
      zoom :'no'
    }
    this.inAppBrowser.create('http://www.kaydofishingworld.com/fishing-product-talk/','_self',options);
  }

  goKayaking() {
    let options: InAppBrowserOptions = {
      zoom :'no'
    }
   this.inAppBrowser.create('http://www.kaydofishingworld.com/kayaking/','_self',options);
  }

  goBoating() {
    let options: InAppBrowserOptions = {
      zoom :'no'
    }
    this.inAppBrowser.create('http://www.kaydofishingworld.com/boating/','_self',options);
  }
  goKaydoTv() {
    let options: InAppBrowserOptions = {
      zoom :'no'
    }
   this.inAppBrowser.create('http://www.kaydofishingworld.com/kaydo-tv/','_self',options);
  }

}
