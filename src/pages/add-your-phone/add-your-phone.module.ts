import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddYourPhonePage } from './add-your-phone';

@NgModule({
  declarations: [
    AddYourPhonePage,
  ],
  imports: [
    IonicPageModule.forChild(AddYourPhonePage),
  ],
})
export class AddYourPhonePageModule {}
