import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddServicesProvider } from '../../providers/add-services/add-services';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-home-post-comment',
  templateUrl: 'home-post-comment.html',
})
export class HomePostCommentPage {

  post_id:number;
  user_id:number;

  post_comment:any[] = []


  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private addServicePro: AddServicesProvider,
              private storage: Storage) {
             
              this.post_id = this.navParams.get('post_id');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePostCommentPage');

         this.storage.get('user_id').then((val) => {
          console.log('user_id', val);
          this.user_id = val;

          this.addServicePro.getComment(this.post_id,this.user_id).subscribe(data=> {
            console.log(data);
            
            if(data['data'].length>0) {
              this.post_comment = data['data'];
            }
           
            console.log(this.post_comment)
          })
          
        });

  }

  // post the comment
  sendComment(comment) {
    this.addServicePro.addComment(this.user_id,this.post_id,comment).subscribe(data=>{
      console.log(data);
    })
  }

}
