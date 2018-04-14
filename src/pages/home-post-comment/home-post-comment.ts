import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AddServicesProvider } from '../../providers/add-services/add-services';

@IonicPage()
@Component({
  selector: 'page-home-post-comment',
  templateUrl: 'home-post-comment.html',
})
export class HomePostCommentPage {

  post_id:number;
  user_id:number=1;

  post_comment:any[] = []
  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private addServicePro: AddServicesProvider) {
              this.post_id = this.navParams.get('post_id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePostCommentPage');
   
    this.addServicePro.getComment(this.post_id,this.user_id).subscribe(data=> {
      console.log(data);
      
      if(data['data'].length>0) {
        this.post_comment = data['data'];
      }
     
      console.log(this.post_comment)
    })
  }

  // post the comment
  sendComment(comment) {
    this.addServicePro.addComment(this.user_id,this.post_id,comment).subscribe(data=>{
      console.log(data);
    })
  }

}
