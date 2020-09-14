import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public iab: InAppBrowser) {}

  abrirEnlace() {
    const browser = this.iab.create('https://escuela.powerexplosive.com/membership-area1593582164571', '_self', {location: 'no'});
  }

}
