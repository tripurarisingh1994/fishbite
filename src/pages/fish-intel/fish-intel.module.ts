import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FishIntelPage } from './fish-intel';

@NgModule({
  declarations: [
    FishIntelPage,
  ],
  imports: [
    IonicPageModule.forChild(FishIntelPage),
  ],
})
export class FishIntelPageModule {}
