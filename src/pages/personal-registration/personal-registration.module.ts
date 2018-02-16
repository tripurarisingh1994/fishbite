import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalRegistrationPage } from './personal-registration';

@NgModule({
  declarations: [
    PersonalRegistrationPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalRegistrationPage),
  ],
})
export class PersonalRegistrationPageModule {}
