import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusinessRegistrationPage } from './business-registration';

@NgModule({
  declarations: [
    BusinessRegistrationPage,
  ],
  imports: [
    IonicPageModule.forChild(BusinessRegistrationPage),
  ],
})
export class BusinessRegistrationPageModule {}
