import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, PopoverController } from 'ionic-angular';
import { GoogleMaps,
          GoogleMap,
          GoogleMapsEvent,
          GoogleMapOptions,
          // CameraPosition,
          // MarkerOptions,
          // Marker 
        } from '@ionic-native/google-maps';
import { FishIntelFishSpeciesFliterPage } from '../fish-intel-fish-species-fliter/fish-intel-fish-species-fliter';
import { FishIntelCaughtInPage } from '../fish-intel-caught-in/fish-intel-caught-in';
import { FishIntelMapOptionsPage } from '../fish-intel-map-options/fish-intel-map-options';
import { Profile1Page } from '../profile1/profile1';
import { NotificationPage } from '../notification/notification';
import { DiscoverPage } from '../discover/discover';
import { KyndofishingPopoverPage } from '../kyndofishing-popover/kyndofishing-popover';

@IonicPage()
@Component({
  selector: 'page-fish-intel',
  templateUrl: 'fish-intel.html',
})
export class FishIntelPage {
  map: GoogleMap;
  isActiveSearchBar:boolean=false;
  constructor(private navCtrl: NavController, 
    private modalCtrl: ModalController,
    private popoverCtrl: PopoverController,) {
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

  catches(): void {
    console.log('catches')
  }

  baits(): void {
    console.log('baits')
  }

  forecast(): void {
    console.log('forecast')
  }

  species(): void {
    console.log('species')
  }

  /**
   * Navigate to user profile1
   */
  goUserProfile(): void {
    this.navCtrl.push(Profile1Page);
  }
/**
 * Navigate to Notification Page
 */
  goNotification(): void {
    this.navCtrl.push(NotificationPage);
  }

  goDiscover(): void {
    this.navCtrl.push(DiscoverPage);
  }

  goFishIntel(): void {
    this.navCtrl.push(FishIntelPage);
  }
  
  popoverKyndofishing(event): void {
    let popover = this.popoverCtrl.create(KyndofishingPopoverPage);
    popover.present({
      ev:event
    });
    console.log('working');
}

}
