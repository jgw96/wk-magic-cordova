import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';

declare var window: any;


@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {

  private rootPage: any;

  constructor(private platform: Platform) {
    this.rootPage = TabsPage;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });

    this.test();
  }
   

   test() {
     // test for indexeddb
    if (window.indexedDB && window.ApplePaySession) {
        // wkwebview
        alert('You are on wkwebview in cordova, safari, ios 10');
    } else if (window.indexedDB && window.ApplePaySession === undefined) {
        // broken wkwebview
        alert('You are on a pwa on ios 10 added to homescreen with broken scroll')
    }
    else {
        // no wkwebview
        alert('You are on ios 9 cordova or ios 8 anything');
    }
   }
}

ionicBootstrap(MyApp);
