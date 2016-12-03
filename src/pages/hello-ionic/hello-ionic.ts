import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NewLinkPage } from '../new-link/new-link';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  newLink(event, id) {
    this.navCtrl.push(NewLinkPage, {});
  }

  newDoc() {
    console.log('doc');
  }

  newVideo() {
    console.log('video');
  }
}
