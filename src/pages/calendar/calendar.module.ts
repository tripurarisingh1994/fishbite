import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalendarPage } from './calendar';
// import { HomeWeatherPageModule } from '../home-weather/home-weather.module';

@NgModule({
  declarations: [
    CalendarPage,
  ],
  imports: [
    IonicPageModule.forChild(CalendarPage),
    // HomeWeatherPageModule
  ],
})
export class CalendarPageModule {}
