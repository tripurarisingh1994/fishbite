import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddTripSearchMemberPage } from './add-trip-search-member';

@NgModule({
  declarations: [
    AddTripSearchMemberPage,
  ],
  imports: [
    IonicPageModule.forChild(AddTripSearchMemberPage),
  ],
})
export class AddTripSearchMemberPageModule {}
