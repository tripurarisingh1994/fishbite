import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WaterwaysPage } from './waterways';

@NgModule({
  declarations: [
    WaterwaysPage,
  ],
  imports: [
    IonicPageModule.forChild(WaterwaysPage),
  ],
})
export class WaterwaysPageModule {}
