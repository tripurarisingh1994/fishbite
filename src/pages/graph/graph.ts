import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CalendarWeatherProvider } from "../../providers/calendar-weather/calendar-weather";
import { AuthenticationProvider } from "../../providers/authentication/authentication";

@IonicPage()
@Component({
  selector: 'page-graph',
  templateUrl: 'graph.html',
})
export class GraphPage {

 
 

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private calender: CalendarWeatherProvider,
    private auth: AuthenticationProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GraphPage');

    var today=new Date();
    var in_a_week =new Date().setDate(today.getDate()+7);
    console.log(today);
    console.log(in_a_week);
  }
}
