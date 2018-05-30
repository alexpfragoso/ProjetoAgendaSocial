import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { FotosPage } from '../fotos/fotos';
import { LocalizationPage } from '../localization/localization';
import { ContactsPage } from '../contacts/contacts';

/**
 * Generated class for the ProjectPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-project',
  templateUrl: 'project.html'
})
export class ProjectPage {

  detailRoot = DetailPage;
  fotosRoot = FotosPage;
  localizationRoot = LocalizationPage;
  contactsRoot = ContactsPage;


  constructor(public navCtrl: NavController) {}

}
