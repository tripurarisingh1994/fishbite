import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePostCommentPage } from './home-post-comment';

@NgModule({
  declarations: [
    HomePostCommentPage,
  ],
  imports: [
    IonicPageModule.forChild(HomePostCommentPage),
  ],
})
export class HomePostCommentPageModule {}
