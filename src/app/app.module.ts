import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LandingPage } from '../pages/landing/landing';
import { LoginPage } from '../pages/login/login';
import { SelectOptnPerBusiPage } from '../pages/select-optn-per-busi/select-optn-per-busi';
import { SelectBusinCategPage } from '../pages/select-busin-categ/select-busin-categ';
import { SignupPage } from '../pages/signup/signup';
import { ForgotPassPage } from '../pages/forgot-pass/forgot-pass';
import { JoinLocalFishCommuniPage } from '../pages/join-local-fish-communi/join-local-fish-communi';
import { ChoosePlanPremiumTrailPage } from'../pages/choose-plan-premium-trail/choose-plan-premium-trail';
import { AddNewPage } from '../pages/add-new/add-new';
import { AddYourPhonePage } from '../pages/add-your-phone/add-your-phone';
import { FishSpeciesPage } from '../pages/fish-species/fish-species';
import { WhatMethodPage } from '../pages/what-method/what-method';
import { WhatLocationPage } from '../pages/what-location/what-location';
import { ProfilePage } from "../pages/profile/profile";
import { Profile1Page } from "../pages/profile1/profile1";
import { CatchInfoPage } from '../pages/catch-info/catch-info';
import { PersonalRegistrationPage } from '../pages/personal-registration/personal-registration';
import { BusinessFranchiseShopNominationsPage } from '../pages/business-franchise-shop-nominations/business-franchise-shop-nominations';
import { BusinessStaffNominationsPage } from '../pages/business-staff-nominations/business-staff-nominations';
import { SelectLanguagePage } from '../pages/select-language/select-language';
import { SelectCountryPage } from '../pages/select-country/select-country';
import { BusinessRegistrationPage } from '../pages/business-registration/business-registration';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LandingPage,
    LoginPage,
    SelectOptnPerBusiPage,
    SelectBusinCategPage,
    SignupPage,
    ForgotPassPage,
    JoinLocalFishCommuniPage,
    ChoosePlanPremiumTrailPage,
    AddNewPage,
    AddYourPhonePage,
    FishSpeciesPage,
    WhatMethodPage,
    WhatLocationPage,
    Profile1Page,
    ProfilePage,
    CatchInfoPage,
    PersonalRegistrationPage,
    BusinessFranchiseShopNominationsPage,
    BusinessStaffNominationsPage,
    SelectLanguagePage,
    SelectCountryPage,
    BusinessRegistrationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LandingPage,
    LoginPage,
    SelectOptnPerBusiPage,
    SelectBusinCategPage,
    SignupPage,
    ForgotPassPage,
    JoinLocalFishCommuniPage,
    ChoosePlanPremiumTrailPage,
    AddNewPage,
    AddYourPhonePage,
    FishSpeciesPage,
    WhatMethodPage,
    WhatLocationPage,
    Profile1Page,
    ProfilePage,
    CatchInfoPage,
    PersonalRegistrationPage,
    BusinessFranchiseShopNominationsPage,
    BusinessStaffNominationsPage,
    SelectLanguagePage,
    SelectCountryPage,
    BusinessRegistrationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
