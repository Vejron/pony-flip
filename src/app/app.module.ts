import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyDkbmjexKLLTSDxgvlhDZ8Rl-5Wz-tUoYI",
  authDomain: "maxi-rt.firebaseapp.com",
  databaseURL: "https://maxi-rt.firebaseio.com",
  //projectId: "maxi-rt",
  storageBucket: "maxi-rt.appspot.com",
  messagingSenderId: "681779424706"
};



import { AppComponent } from './app.component';
import { FlipCardComponent } from './flip-card/flip-card.component';
import { FlipBoardComponent } from './flip-board/flip-board.component';

@NgModule({
  declarations: [
    AppComponent,
    FlipCardComponent,
    FlipBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
