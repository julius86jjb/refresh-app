import { Injectable } from '@angular/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';

@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {

  constructor(private oneSignal: OneSignal) { }


  configuracionInicial() {

    this.oneSignal.startInit('a6d3ade6-b8bb-4845-a65c-091295dacc00', '800583647025');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

    this.oneSignal.handleNotificationReceived().subscribe((noti) => {
      // do something when notification is received
      console.log('notificacion recibida', noti);
    });

    this.oneSignal.handleNotificationOpened().subscribe((noti) => {
      // do something when a notification is opened
      console.log('notificacion abierta', noti);
    });

    this.oneSignal.endInit();
  }
}
