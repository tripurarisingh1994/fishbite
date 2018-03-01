import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyCatchesPage } from './my-catches';

@NgModule({
  declarations: [
    MyCatchesPage,
  ],
  imports: [
    IonicPageModule.forChild(MyCatchesPage),
  ],
})
export class MyCatchesPageModule {}
