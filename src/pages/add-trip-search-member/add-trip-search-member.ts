import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AddServicesProvider } from '../../providers/add-services/add-services';

@IonicPage()
@Component({
  selector: 'page-add-trip-search-member',
  templateUrl: 'add-trip-search-member.html',
})
export class AddTripSearchMemberPage {

  searchQuery:string='';
  members:string[];

  constructor(private navCtrl: NavController,
              private addServiceProvider: AddServicesProvider,
              private loadingCtrl: LoadingController) {

  }

  getMembers(ev: any) {

    let val = ev.target.value;
    this.members = [];

    if(val!='') {
      let loader = this.loadingCtrl.create({});

      loader.present();

       this.addServiceProvider.searchUser(val).subscribe(data=> {
        console.log(data['data']);
        this.members = data['data'];
        
        loader.dismiss();
      },(err)=> {
        console.log("err",err)

        loader.dismiss();
      })
    } 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTripSearchMemberPage');
  }

  selectMember(member_id, member_name) {  // select member item

    if(this.navCtrl.canGoBack) {
      this.addServiceProvider.member_id.push(member_id);
      this.addServiceProvider.member_name.push(member_name);

      this.navCtrl.pop();
    }
   
  }

}
