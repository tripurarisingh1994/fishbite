import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WhatLocationPage } from './what-location';

@NgModule({
  declarations: [
    WhatLocationPage,
  ],
  imports: [
    IonicPageModule.forChild(WhatLocationPage),
  ],
})
export class WhatLocationPageModule {}
