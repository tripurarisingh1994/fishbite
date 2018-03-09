import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchFishingWatersPage } from './search-fishing-waters';

@NgModule({
  declarations: [
    SearchFishingWatersPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchFishingWatersPage),
  ],
})
export class SearchFishingWatersPageModule {}
