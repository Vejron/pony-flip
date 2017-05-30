import { Component } from '@angular/core';
//import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
//import { AngularFireAuth } from 'angularfire2/auth';
//import * as firebase from 'firebase/app';
//import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /*user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal: string = '';

  constructor(public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.items = af.list('/messages', {
      query: {
        limitToLast: 50,
        orderByKey: true
      }
    });

    this.user = this.afAuth.authState;

    this.items.subscribe( item => console.log(item));

  }

  login() {
    this.afAuth.auth.signInAnonymously().then( val => console.log(val));
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  Send(desc: string) {
    //this.items.update()
    this.items.push({ message: desc });
    this.msgVal = '';
  }*/
}
