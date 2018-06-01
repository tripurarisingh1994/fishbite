import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FindFriendsOnFbPage } from './find-friends-on-fb';

@NgModule({
  declarations: [
    FindFriendsOnFbPage,
  ],
  imports: [
    IonicPageModule.forChild(FindFriendsOnFbPage),
  ],
})
export class FindFriendsOnFbPageModule {}
