import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddMomentPage } from './add-moment';

@NgModule({
  declarations: [
    AddMomentPage,
  ],
  imports: [
    IonicPageModule.forChild(AddMomentPage),
  ],
})
export class AddMomentPageModule {}
