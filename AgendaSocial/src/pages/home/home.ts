import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProjectPage } from '../project/project';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
    
    

  }

  goToProjectPage() {
    // go to the HomePage component
    this.navCtrl.push(ProjectPage);
    console.log('chama ProjectPage');
  }
}
