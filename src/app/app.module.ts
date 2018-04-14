import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Camera } from '@ionic-native/camera';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { GoogleMaps } from '@ionic-native/google-maps';
import { NativeAudio } from '@ionic-native/native-audio';
import { GooglePlus } from '@ionic-native/google-plus';
import { Facebook } from '@ionic-native/facebook';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LandingPage } from '../pages/landing/landing';
import { LoginPage } from '../pages/login/login';
import { SelectOptnPerBusiPage } from '../pages/select-optn-per-busi/select-optn-per-busi';
import { SelectBusinCategPage } from '../pages/select-busin-categ/select-busin-categ';
import { SignupPage } from '../pages/signup/signup';
import { ForgotPassPage } from '../pages/forgot-pass/forgot-pass';
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
import { SelectLanguagePage } from '../pages/select-language/select-language';
import { SelectCountryPage } from '../pages/select-country/select-country';
import { BusinessRegistrationPage } from '../pages/business-registration/business-registration';
import { UpgradePage } from '../pages/upgrade/upgrade';
import { AddBaitPage } from '../pages/add-bait/add-bait';
import { AddTripPage } from '../pages/add-trip/add-trip';
import { AddWaterwayPage } from '../pages/add-waterway/add-waterway';
import { AddMomentPage } from '../pages/add-moment/add-moment';
import { BaitsPage } from '../pages/baits/baits';
import { WaterwayPage } from '../pages/waterway/waterway';
import { TripsPage } from '../pages/trips/trips';
import { DiscoverPage } from '../pages/discover/discover';
import { DiscoverAnglersPage } from '../pages/discover-anglers/discover-anglers';
import { MyCatchesPage } from '../pages/my-catches/my-catches';
import { ForumPage } from '../pages/forum/forum';
import { NotificationPage } from '../pages/notification/notification';
import { SettingPage } from '../pages/setting/setting';
import { KyndofishingPopoverPage } from '../pages/kyndofishing-popover/kyndofishing-popover';
import { PrivacyPage } from '../pages/privacy/privacy';
import { TermsAndConditionsPage } from '../pages/terms-and-conditions/terms-and-conditions';
import { HelpAndSupportPage } from '../pages/help-and-support/help-and-support';
import { LoyalityCompetitionPage } from '../pages/loyality-competition/loyality-competition';
import { FishIntelPage } from '../pages/fish-intel/fish-intel';
import { FishIntelFishSpeciesFliterPage } from '../pages/fish-intel-fish-species-fliter/fish-intel-fish-species-fliter';
import { FishIntelCaughtInPage } from '../pages/fish-intel-caught-in/fish-intel-caught-in';
import { SearchFishingWatersPage } from '../pages/search-fishing-waters/search-fishing-waters';
import { FishIntelMapOptionsPage } from '../pages/fish-intel-map-options/fish-intel-map-options';
import { AddTripSearchMemberPage } from '../pages/add-trip-search-member/add-trip-search-member';
import { CalendarPage } from '../pages/calendar/calendar';
import { JoinLocalFishCommuniPage } from '../pages/join-local-fish-communi/join-local-fish-communi';
import { GraphPage } from '../pages/graph/graph';
import { HomePostCommentPage } from '../pages/home-post-comment/home-post-comment';
import { AddWaterwaySelectWaterwayPage } from '../pages/add-waterway-select-waterway/add-waterway-select-waterway';

import { HttpClientModule } from '@angular/common/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthenticationProvider } from '../providers/authentication/authentication';
import { CountryListProvider } from '../providers/country-list/country-list';
import { LanguageListProvider } from '../providers/language-list/language-list';
import { AddServicesProvider } from '../providers/add-services/add-services';
import { CalendarWeatherProvider } from '../providers/calendar-weather/calendar-weather';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LandingPage,
    LoginPage,
    SelectOptnPerBusiPage,
    SelectBusinCategPage,
    SignupPage,
    ForgotPassPage,
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
    SelectLanguagePage,
    SelectCountryPage,
    BusinessRegistrationPage,
    UpgradePage,
    AddBaitPage,
    AddTripPage,
    AddWaterwayPage,
    AddMomentPage,
    BaitsPage,
    WaterwayPage,
    TripsPage,
    DiscoverPage,
    DiscoverAnglersPage,
    MyCatchesPage,
    ForumPage,
    NotificationPage,
    SettingPage,
    KyndofishingPopoverPage,
    PrivacyPage,
    TermsAndConditionsPage,
    HelpAndSupportPage,
    LoyalityCompetitionPage,
    FishIntelPage,
    FishIntelFishSpeciesFliterPage,
    FishIntelCaughtInPage,
    SearchFishingWatersPage,
    FishIntelMapOptionsPage,
    AddTripSearchMemberPage,
    CalendarPage,
    JoinLocalFishCommuniPage,
    GraphPage,
    HomePostCommentPage,
    AddWaterwaySelectWaterwayPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LandingPage,
    LoginPage,
    SelectOptnPerBusiPage,
    SelectBusinCategPage,
    SignupPage,
    ForgotPassPage,
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
    SelectLanguagePage,
    SelectCountryPage,
    BusinessRegistrationPage,
    UpgradePage,
    AddBaitPage,
    AddTripPage,
    AddWaterwayPage,
    AddMomentPage,
    BaitsPage,
    WaterwayPage,
    TripsPage,
    DiscoverPage,
    DiscoverAnglersPage,
    MyCatchesPage,
    ForumPage,
    NotificationPage,
    SettingPage,
    KyndofishingPopoverPage,
    PrivacyPage,
    TermsAndConditionsPage,
    HelpAndSupportPage,
    LoyalityCompetitionPage,
    FishIntelPage,
    FishIntelFishSpeciesFliterPage,
    FishIntelCaughtInPage,
    SearchFishingWatersPage,
    FishIntelMapOptionsPage,
    AddTripSearchMemberPage,
    CalendarPage,
    JoinLocalFishCommuniPage,
    GraphPage,
    HomePostCommentPage,
    AddWaterwaySelectWaterwayPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SocialSharing,
    Camera,
    InAppBrowser,
    GoogleMaps,
    NativeAudio,
    GooglePlus,
    Facebook,
    AuthenticationProvider,
    CountryListProvider,
    LanguageListProvider,
    AddServicesProvider,
    FileTransfer,
    File,
    CalendarWeatherProvider,
  ]
})
export class AppModule {}
