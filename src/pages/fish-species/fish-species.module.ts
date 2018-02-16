import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FishSpeciesPage } from './fish-species';

@NgModule({
  declarations: [
    FishSpeciesPage,
  ],
  imports: [
    IonicPageModule.forChild(FishSpeciesPage),
  ],
})
export class FishSpeciesPageModule {}
