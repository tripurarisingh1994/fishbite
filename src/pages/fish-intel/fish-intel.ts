import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { GoogleMaps,
          GoogleMap,
          GoogleMapsEvent,
          GoogleMapOptions,
          CameraPosition,
          MarkerOptions,
          Marker 
        } from '@ionic-native/google-maps';
import { FishIntelFishSpeciesFliterPage } from '../fish-intel-fish-species-fliter/fish-intel-fish-species-fliter';
import { FishIntelCaughtInPage } from '../fish-intel-caught-in/fish-intel-caught-in';
import { FishIntelMapOptionsPage } from '../fish-intel-map-options/fish-intel-map-options';

@IonicPage()
@Component({
  selector: 'page-fish-intel',
  templateUrl: 'fish-intel.html',
})
export class FishIntelPage {
  map: GoogleMap;
  isActiveSearchBar:boolean=false;
  constructor(private navCtrl: NavController, 
    private navParams: NavParams,
    private modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FishIntelPage');
    this.loadMap();
  }

  loadMap() {

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    }
    let element: HTMLElement = document.getElementById('map'); 
    this.map = GoogleMaps.create(element,mapOptions);

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
            .then(() => {
              console.log('Map is ready');

              // Now you can use all method safely
              this.map.addMarker({
                title:'Ionic',
                icon:'blue',
                animation:'DROP',
                position: {
                  lat: 43.0741904,
                  lng: -89.3809802
                }
              })
              .then(marker => {
                marker.on(GoogleMapsEvent.MARKER_CLICK)
                .subscribe(()=> {
                  alert('clicked');
                });
              });
            });
  }

  goFishIntelFishSpeciesFilter(): void {
      let modal = this.modalCtrl.create(FishIntelFishSpeciesFliterPage);
      modal.present();
  }

  goFishIntelCaughtIn(): void {
      let modal = this.modalCtrl.create(FishIntelCaughtInPage);
      modal.present();
  }

  goFishIntelMapOptions(): void {
    let modal =  this.modalCtrl.create(FishIntelMapOptionsPage);
    modal.present();
  }

  search(): void {
    this.isActiveSearchBar=true;
  }

  backFromSearch(): void {
    this.isActiveSearchBar=false;
  }

}
