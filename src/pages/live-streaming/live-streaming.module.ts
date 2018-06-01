import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LiveStreamingPage } from './live-streaming';

@NgModule({
  declarations: [
    LiveStreamingPage,
  ],
  imports: [
    IonicPageModule.forChild(LiveStreamingPage),
  ],
})
export class LiveStreamingPageModule {}
