import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FishSpeciesProvider } from '../../providers/fish-species/fish-species';
import { CatchInfoProvider } from '../../providers/catch-info/catch-info';

@IonicPage()
@Component({
  selector: 'page-fish-species',
  templateUrl: 'fish-species.html',
})
export class FishSpeciesPage {

  species:string[] = [];
  constructor(private navCtrl: NavController,
              private fishSpeciesPro: FishSpeciesProvider,
              private catchInfoPro: CatchInfoProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FishSpeciesPage');
    
    this.fishSpeciesPro.getFishSpeciesData().subscribe(data=> {
      console.log(data);

      this.species = data['data'];
    })
  }


  selectSpecies(species_id, species_name) {
    console.log(species_id, species_name)

    this.catchInfoPro.species_id   = species_id;
    this.catchInfoPro.species_name = species_name;

    this.navCtrl.pop();
  }

}
