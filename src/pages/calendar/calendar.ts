import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { Chart, ChartData, Point } from 'chart.js';
// import { CalendarWeatherProvider } from "../../providers/calendar-weather/calendar-weather";
// import { AuthenticationProvider } from "../../providers/authentication/authentication";
@IonicPage()
@Component({
  selector: 'page-calendar',
  templateUrl: 'calendar.html',
})
export class CalendarPage {

  constructor(private navCtrl: NavController) {
    
  }
  
  showWeather() {
    this.navCtrl.push('HomeWeatherPage');
  }

  showWorldWeather() {
    this.navCtrl.push('WorldCityListPage');
  }
  // getTimeStamptoTime(unix_timestamp)
  // {
  //   let date = new Date(unix_timestamp*1000);
  //   let hours = date.getHours();
  //   /*let minutes = "0" + date.getMinutes();
  //   let seconds = "0" + date.getSeconds();
  //   let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);*/
  //   let type = (hours <= 12) ? " AM" : " PM";
  //   let date1 = ((+hours % 12) || hours)  + type;
  //   return date1;
  // }
  // timestampToTime(timestamp)
  // {
  //   var date = new Date(timestamp * 1000);
  //   var hours = date.getHours();
  //   var minutes = date.getMinutes();
  //   //var seconds = "0" + date.getSeconds();
  //   return hours+":"+minutes;
  // }

  // FarenhiteToCelcius(f)
  // {
  //   let x = (f -32) * 5 / 9;
  //   return Math.round(x);
  // }
 
  // date: any;
  // daysInThisMonth: any;
  // daysInLastMonth: any;
  // daysInNextMonth: any;
  // monthNames: string[];
  // currentMonth: any;
  // currentYear: any;
  // currentDate: any;
  // eventList: any;
  // selectedEvent: any;
  // isSelected: any;
  // temp: string = "";
  // temp1: string = "";
  // canvas: any;
  // ctx: any;
  // lab_array = [];
  // data_pressure = [];
  // data_temparature = [];
  // data_wind = [];
  // moon_phase: number = 0;
  // sunrise: string = "";
  // sunset: string = "";
 
  // constructor(public navCtrl: NavController, 
  //   private calender: CalendarWeatherProvider,
  // private auth: AuthenticationProvider) {}

  // ionViewWillEnter() {
  //   this.date = new Date();
  //   this.monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  //   this.getDaysOfMonth();
  //   this.temp = this.currentDate + "-" + this.currentMonth + "-" + this.currentYear;
  //   //this.calender.getWeather()
  //   this.auth.getLatLang().subscribe(
  //     (data)=>
  //     {
  //       let data1 = JSON.parse(JSON.stringify(data));
  //       this.calender.getWeather(data1.lat, data1.lon).subscribe((weatherData)=>
  //       {
  //         let weather = JSON.parse(JSON.stringify(weatherData));
  //         this.data_pressure = [];
  //         this.data_temparature = []
  //         this.lab_array = [];
  //         this.data_wind = [];
  //         let windData = [];
  //         let pressurTitle = [];
  //         let temparatureData = []
  //         let pressurData = [];
  //         let pressuredata = weather.hourly.data;
  //         this.moon_phase = weather.daily.data[0].moonPhase*100;
  //         this.sunrise = this.timestampToTime(weather.daily.data[0].sunriseTime);
  //         this.sunset = this.timestampToTime(weather.daily.data[0].sunsetTime);
  //         for (var v in pressuredata) {  
  //           //console.log(pressuredata[v].windSpeed);  
  //           pressurTitle.push(this.getTimeStamptoTime(pressuredata[v].time));
  //           pressurData.push(pressuredata[v].pressure);
  //           windData.push(pressuredata[v].windSpeed);
  //           temparatureData.push(this.FarenhiteToCelcius(pressuredata[v].temperature));
  //           //pressurData.push(parseInt(v));
  //         }
  //         this.lab_array = pressurTitle;
  //         this.data_pressure = pressurData; 
  //         this.data_temparature = temparatureData;
  //         this.data_wind = windData;
  //         //console.log(windData);
  //         //console.log(this.lab_array); console.log(this.data_pressure); console.log(this.data_temparature);     
          
          
  //         ///////////////////
          

  //         this.canvas = document.getElementById('pressure');
  //         this.ctx = this.canvas.getContext('2d');
  //         let data = {
  //               labels: this.lab_array,
  //               datasets: [{
  //               label: 'Pressure in pascal',
  //               data: this.data_pressure,
  //               backgroundColor: [
  //                   'rgba(3,84,169, 1)',
  //                   'rgba(3,84,169, 1)',
  //                   'rgba(3,84,169, 1)'
  //                 ],
  //               borderWidth: 1
  //               }]
  //             };
  //         let chart = new Chart(this.ctx, {
  //                     type: 'line',
  //                     data: data,
  //                     options: {
  //                       legend: {
  //                         display: true,
  //                         labels: {
  //                           fontColor: 'rgb(3,84,169)'
  //                         }
  //                       }
  //                     }
  //                   });

  //         /////////////////////////////////////

  //         this.canvas = document.getElementById('temparature');
  //         this.ctx = this.canvas.getContext('2d');
  //         let data1 = {
  //               labels: this.lab_array,
  //               datasets: [{
  //               label: 'Temparature in celcius',
  //               data: this.data_temparature,
  //               backgroundColor: [
  //                   'rgba(3,84,169, 1)',
  //                   'rgba(3,84,169, 1)',
  //                   'rgba(3,84,169, 1)'
  //                 ],
  //               borderWidth: 1
  //               }]
  //             };
  //         let chart1 = new Chart(this.ctx, {
  //                     type: 'line',
  //                     data: data1,
  //                     options: {
  //                       legend: {
  //                         display: true,
  //                         labels: {
  //                           fontColor: 'rgb(3,84,169)'
  //                         }
  //                       }
  //                     }
  //                   });

  //         /////////////////////////


  //         this.canvas = document.getElementById('wind');
  //         this.ctx = this.canvas.getContext('2d');
  //         let data2 = {
  //               labels: this.lab_array,
  //               datasets: [{
  //               label: 'Wind speed in Km/h',
  //               data: this.data_wind,
  //               backgroundColor: [
  //                   'rgba(3,84,169, 1)',
  //                   'rgba(3,84,169, 1)',
  //                   'rgba(3,84,169, 1)'
  //                 ],
  //               borderWidth: 1
  //               }]
  //             };
  //         let chart2 = new Chart(this.ctx, {
  //                     type: 'line',
  //                     data: data2,
  //                     options: {
  //                       legend: {
  //                         display: true,
  //                         labels: {
  //                           fontColor: 'rgb(3,84,169)'
  //                         }
  //                       }
  //                     }
  //                   });
          
  //       });
  //     }
  //   );
  // }

  // getDaysOfMonth() {
  //   this.daysInThisMonth = new Array();
  //   this.daysInLastMonth = new Array();
  //   this.daysInNextMonth = new Array();
  //   this.currentMonth = this.monthNames[this.date.getMonth()];
  //   this.currentYear = this.date.getFullYear();
  //   if(this.date.getMonth() === new Date().getMonth()) {
  //     this.currentDate = new Date().getDate();
  //   } else {
  //     this.currentDate = 999;
  //   }
  //   var firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
  //   var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
  //   for(var i = prevNumOfDays-(firstDayThisMonth-1); i <= prevNumOfDays; i++) {
  //     this.daysInLastMonth.push(i);
  //   }

  //   var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDate();
  //   for (var j = 0; j < thisNumOfDays; j++) {
  //     this.daysInThisMonth.push(j+1);
  //     //console.log(j+1);
  //   }

  //   var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth()+1, 0).getDay();
  //   for (var k = 0; k < (6-lastDayThisMonth); k++) {
  //     this.daysInNextMonth.push(k+1);
  //   }
  //   var totalDays = this.daysInLastMonth.length+this.daysInThisMonth.length+this.daysInNextMonth.length;
  //   if(totalDays<36) {
  //     for(var l = (7-lastDayThisMonth); l < ((7-lastDayThisMonth)+7); l++) {
  //       this.daysInNextMonth.push(l);
  //     }
  //   }
  // }
  // goToLastMonth() {
  //   this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
  //   this.getDaysOfMonth();
  // }
  // goToNextMonth() { this.date = new Date(this.date.getFullYear(), this.date.getMonth()+2, 0); this.getDaysOfMonth(); } 
  // selectDate(day) { 
  //   //let url = "https://api.darksky.net/forecast/14f1bf883bcfdee9fc15c222f2f3b22f/" + localStorage.lat + "," + localStorage.lng+"," + Math.floor(new Date(this.currentYear, this.date.getMonth() - 1, day).getTime() / 1000);

  //   this.auth.getLatLang().subscribe(
  //     (data)=>
  //     {
  //       let data1 = JSON.parse(JSON.stringify(data));
  //       this.calender.getWeather(data1.lat, data1.lon, Math.floor(new Date(this.currentYear, this.date.getMonth() - 1, day).getTime() / 1000)).subscribe((weatherData)=>
  //       {
  //         let weather = JSON.parse(JSON.stringify(weatherData));
  //         this.data_pressure = [];
  //         this.data_temparature = []
  //         this.lab_array = [];
  //         let pressurTitle = [];
  //         let temparatureData = []
  //         let pressurData = [];
  //         this.data_wind = [];
  //         let windData = [];
  //         let pressuredata = weather.hourly.data;
  //         this.moon_phase = weather.daily.data[0].moonPhase*100;
  //         this.sunrise = this.timestampToTime(weather.daily.data[0].sunriseTime);
  //         this.sunset = this.timestampToTime(weather.daily.data[0].sunsetTime);

  //         for (var v in pressuredata) {  
  //           console.log(pressuredata[v].pressure);  
  //           pressurTitle.push(this.getTimeStamptoTime(pressuredata[v].time));
  //           pressurData.push(pressuredata[v].pressure);
  //           console.log(pressurData[v]);
  //           //windData.push(pressurData[v].windSpeed);
  //           temparatureData.push(this.FarenhiteToCelcius(pressuredata[v].temperature));
  //           //pressurData.push(parseInt(v));
  //         }
  //         this.lab_array = pressurTitle;
  //         this.data_pressure = pressurData; 
  //         this.data_temparature = temparatureData;
  //         this.data_wind = windData;
          //console.log(this.lab_array); console.log(this.data_pressure); console.log(this.data_temparature);     
          
          
          ///////////////////
          /*

          this.canvas = document.getElementById('pressure');
          this.ctx = this.canvas.getContext('2d');
          let data = {
                labels: this.lab_array,
                datasets: [{
                label: '',
                data: this.data_pressure,
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                  ],
                borderWidth: 1
                }]
              };
          let chart = new Chart(this.ctx, {
                      type: 'line',
                      data: data,
                      options: {
                        legend: {
                          display: true,
                          labels: {
                            fontColor: 'rgb(255, 99, 132)'
                          }
                        }
                      }
                    });

          /////////////////////////////////////

          this.canvas = document.getElementById('temparature');
          this.ctx = this.canvas.getContext('2d');
          let data1 = {
                labels: this.lab_array,
                datasets: [{
                label: '',
                data: this.data_temparature,
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                  ],
                borderWidth: 1
                }]
              };
          let chart1 = new Chart(this.ctx, {
                      type: 'line',
                      data: data1,
                      options: {
                        legend: {
                          display: true,
                          labels: {
                            fontColor: 'rgb(255, 99, 132)'
                          }
                        }
                      }
                    });

          //////////////////////////////////////

          /////////////////////////


          this.canvas = document.getElementById('wind');
          this.ctx = this.canvas.getContext('2d');
          let data2 = {
                labels: this.lab_array,
                datasets: [{
                label: '',
                data: this.data_wind,
                backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                  ],
                borderWidth: 1
                }]
              };
          let chart2 = new Chart(this.ctx, {
                      type: 'line',
                      data: data2,
                      options: {
                        legend: {
                          display: true,
                          labels: {
                            fontColor: 'rgb(255, 99, 132)'
                          }
                        }
                      }
                    });*/
          //////////////////////////////////////////////
  //       });
  //     }
  //   );

  //  }

  /*ngAfterViewInit() {
    this.canvas = document.getElementById('myChart');
    this.ctx = this.canvas.getContext('2d');
    let data = {
      labels: this.lab_array,
      datasets: [{
          label: '',
          data: this.dat_array,
          backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
      }]
    };
    let chart = new Chart(this.ctx, {
      type: 'line',
      data: data,
      options: {
          legend: {
              display: true,
              labels: {
                  fontColor: 'rgb(255, 99, 132)'
              }
          }
        }
      });
  }*/
  


}
