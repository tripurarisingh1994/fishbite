import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForumDetailsPage } from './forum-details';

@NgModule({
  declarations: [
    ForumDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ForumDetailsPage),
  ],
})
export class ForumDetailsPageModule {}
