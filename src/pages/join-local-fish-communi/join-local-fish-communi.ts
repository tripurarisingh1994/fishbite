import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddNewPage } from '../add-new/add-new';


@IonicPage()
@Component({
  selector: 'page-join-local-fish-communi',
  templateUrl: 'join-local-fish-communi.html',
})
export class JoinLocalFishCommuniPage {

  constructor(private navCtrl: NavController, private navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JoinLocalFishCommuniPage');
  }

  /* goAddNew() method */

  goAddNew() {
    this.navCtrl.push(AddNewPage);
  }

}
