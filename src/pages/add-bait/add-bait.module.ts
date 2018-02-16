import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddBaitPage } from './add-bait';

@NgModule({
  declarations: [
    AddBaitPage,
  ],
  imports: [
    IonicPageModule.forChild(AddBaitPage),
  ],
})
export class AddBaitPageModule {}
