import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs';
import { NavController, App } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    public app: App
  ) {

  }

  pushPage(){
    this.navCtrl.push(TabsPage)

  }

  popToRoot(){
    this.app.getRootNav().pop()
  }

}
