import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
// import { AddNewPage } from '../add-new/add-new';

 
@NgModule({
  declarations: [
    HomePage,
    // AddNewPage
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
    // AddNewPageModule,
  ],
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  // exports: [AddNewPage],
  
 
})
export class HomePageModule {}