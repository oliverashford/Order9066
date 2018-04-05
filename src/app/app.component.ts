import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';         // Manage the appearance of the native status bar - https://ionicframework.com/docs/native/status-bar/
import { SplashScreen } from '@ionic-native/splash-screen';   // This plugin displays and hides a splash screen during application launch - https://ionicframework.com/docs/native/splash-screen/

import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  rootPage:any = HomePage;

  constructor( platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen ) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

  }

}
