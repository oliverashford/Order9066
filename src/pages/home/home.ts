import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AlertController } from 'ionic-angular';

import { SettingsPage } from '../settings/settings';
import { BrowserPage } from '../browser/browser';
import { GalleryPage } from '../gallery/gallery';
import { MessagesPage } from '../messages/messages';
import { PhonePage } from '../phone/phone';
import { TasksPage } from '../tasks/tasks';

@Component ({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor (
    public navCtrl: NavController,
    public alertCtrl: AlertController
  ) {}

  goToPage ( targetPage : String ) {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in

    console.log( 'targetPage: ' + targetPage );

    switch( targetPage ) {
      case 'SettingsPage': {
        this.navCtrl.push( SettingsPage );
        break;
      }
      case 'BrowserPage': {
        this.navCtrl.push( BrowserPage );
        break;
      }
      case 'GalleryPage': {
        this.navCtrl.push( GalleryPage );
        break;
      }
      case 'MessagesPage': {
        this.navCtrl.push( MessagesPage );
        break;
      }
      case 'PhonePage': {
        this.navCtrl.push( PhonePage );
        break;
      }
      case 'TasksPage': {
        this.navCtrl.push( TasksPage );
        break;
      }
      default: {
        // nothing
      break;
      }
    }

  }
}
