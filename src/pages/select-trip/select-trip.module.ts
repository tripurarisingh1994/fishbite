import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SelectTripPage } from './select-trip';

@NgModule({
  declarations: [
    SelectTripPage,
  ],
  imports: [
    IonicPageModule.forChild(SelectTripPage),
  ],
})
export class SelectTripPageModule {}
