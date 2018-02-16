import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LandingPage } from "../pages/landing/landing";
import { LoginPage } from '../pages/login/login';
import { SelectOptnPerBusiPage } from '../pages/select-optn-per-busi/select-optn-per-busi';
import { SelectBusinCategPage } from '../pages/select-busin-categ/select-busin-categ';
import { SignupPage } from '../pages/signup/signup';
import { ForgotPassPage } from '../pages/forgot-pass/forgot-pass';
import { JoinLocalFishCommuniPage } from '../pages/join-local-fish-communi/join-local-fish-communi';
import { ChoosePlanPremiumTrailPage } from '../pages/choose-plan-premium-trail/choose-plan-premium-trail';
import { AddNewPage } from '../pages/add-new/add-new';
import { AddYourPhonePage } from '../pages/add-your-phone/add-your-phone';
import { FishSpeciesPage } from '../pages/fish-species/fish-species';
import { WhatMethodPage } from '../pages/what-method/what-method';
import { WhatLocationPage } from '../pages/what-location/what-location';
import { ProfilePage } from '../pages/profile/profile';
import { Profile1Page } from '../pages/profile1/profile1';
import { CatchInfoPage } from '../pages/catch-info/catch-info';
import { PersonalRegistrationPage } from '../pages/personal-registration/personal-registration';
import { BusinessFranchiseShopNominationsPage } from '../pages/business-franchise-shop-nominations/business-franchise-shop-nominations';
import { BusinessStaffNominationsPage } from '../pages/business-staff-nominations/business-staff-nominations';
import { SelectCountryPage } from '../pages/select-country/select-country';
import { SelectLanguagePage } from '../pages/select-language/select-language';
import { BusinessRegistrationPage } from '../pages/business-registration/business-registration';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LandingPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      // { title: 'Home', component: HomePage },
      { title: 'LandingPage', component: LandingPage },
      { title: 'Login', component: LoginPage },
      { title: 'Select Per or Busi', component: SelectOptnPerBusiPage },
      { title: 'Select Business Categ', component: SelectBusinCategPage},
      { title: 'Signup', component: SignupPage},
      { title: 'Forgot Password', component: ForgotPassPage},
      { title: 'Join Local Fish Commnuity', component: JoinLocalFishCommuniPage},
      { title: 'Choose Plan Premium Trail', component: ChoosePlanPremiumTrailPage},
      { title: 'Add New', component: AddNewPage},
      { title: 'Add Phone', component: AddYourPhonePage},
      { title: 'Fish Species', component: FishSpeciesPage},
      { title: 'What Method', component: WhatMethodPage},
      { title: 'What Location', component: WhatLocationPage},
      { title: 'Profile', component: ProfilePage},
      { title: 'Profile1', component: Profile1Page},
      { title: 'Catch Info', component: CatchInfoPage},
      { title: 'Personal Registration', component: PersonalRegistrationPage},
      { title: 'Business Franchise Shop', component: BusinessFranchiseShopNominationsPage},
      { title: 'Business Staff Nomination', component: BusinessStaffNominationsPage},
      { title: 'Select Language', component: SelectLanguagePage},
      { title: 'Select Country', component: SelectCountryPage},
      { title: 'Business Registration', component: BusinessRegistrationPage},

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
    this.nav.setRoot(page.component);
  }
}
