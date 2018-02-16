import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CatchInfoPage } from './catch-info';

@NgModule({
  declarations: [
    CatchInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(CatchInfoPage),
  ],
})
export class CatchInfoPageModule {}
