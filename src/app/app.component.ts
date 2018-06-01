import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';

import { MainPage } from '../pages/main/main';
import { LandingPage } from "../pages/landing/landing";
import { ForumPage } from '../pages/forum/forum';
// import { NotificationPage } from '../pages/notification/notification';
// import { SettingPage } from '../pages/setting/setting';
import { PrivacyPage } from '../pages/privacy/privacy';
import { TermsAndConditionsPage } from '../pages/terms-and-conditions/terms-and-conditions';
import { HelpAndSupportPage } from '../pages/help-and-support/help-and-support';
import { LoyalityCompetitionPage } from '../pages/loyality-competition/loyality-competition';
import { CalendarPage } from '../pages/calendar/calendar';
// import { FishIntelPage } from '../pages/fish-intel/fish-intel';
// import { CalendarPage } from '../pages/calendar/calendar';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private storage: Storage) {

    this.storage.get('user_id').then((val) => {
      console.log('user_id', val);
      if (val) {
        this.rootPage = MainPage;
      }
      else {
        this.rootPage = LandingPage;
      }
    });
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: MainPage },
      { title: 'Fourm', component: ForumPage },
      // { title: 'Fishing & Boating', component: '' },
      { title: 'Loyalty & Competition', component: LoyalityCompetitionPage },
      // { title: 'Trip Diary', component: '' },
      // { title: 'Calender catch and trip diary', component: '' },
      // { title: 'Settings', component: SettingPage },
      { title: 'Privacy', component: PrivacyPage },
      { title: 'Terms and Conditions', component: TermsAndConditionsPage },
      { title: 'Help and Support', component: HelpAndSupportPage },
      // { title: 'Calendar', component: CalendarPage },
      { title: 'Home Waether', component: 'HomeWeatherPage' },
      { title: 'World Waether', component: 'WorldCityListPage' },

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page.title === 'Home') {
      this.nav.setRoot(page.component)
    }
    else {
      this.nav.push(page.component);
    }
  }
}
