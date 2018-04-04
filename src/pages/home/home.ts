import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SettingsPage } from '../settings/settings';

import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController
  ) {}

  goToOtherPage () {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in

    /*
    let alert = this.alertCtrl.create({
          title: 'New Friend!',
          subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
          buttons: ['OK']
        });
        alert.present();
        */


    this.navCtrl.push(SettingsPage);

  }

}
