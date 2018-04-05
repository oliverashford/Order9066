import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Badge } from '@ionic-native/badge';                                // The essential purpose of badge numbers is to enable an application to inform its users that it has something for them — for example, unread messages — when the application isn’t running in the foreground - https://ionicframework.com/docs/native/badge/

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { SettingsPage } from '../pages/settings/settings';
import { BrowserPage } from '../pages/browser/browser';
import { GalleryPage } from '../pages/gallery/gallery';
import { MessagesPage } from '../pages/messages/messages';
import { PhonePage } from '../pages/phone/phone';
import { TasksPage } from '../pages/tasks/tasks';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SettingsPage,
    BrowserPage,
    GalleryPage,
    MessagesPage,
    PhonePage,
    TasksPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SettingsPage,
    BrowserPage,
    GalleryPage,
    MessagesPage,
    PhonePage,
    TasksPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Badge,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
