import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BusinessStaffNominationsPage } from './business-staff-nominations';

@NgModule({
  declarations: [
    BusinessStaffNominationsPage,
  ],
  imports: [
    IonicPageModule.forChild(BusinessStaffNominationsPage),
  ],
})
export class BusinessStaffNominationsPageModule {}
