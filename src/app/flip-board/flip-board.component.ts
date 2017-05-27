import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-flip-board',
  templateUrl: './flip-board.component.html',
  styleUrls: ['./flip-board.component.scss']
})
export class FlipBoardComponent implements OnInit {

  //ponys: Pony[];
  ponys: FirebaseListObservable<Pony[]>;

  constructor(private db: AngularFireDatabase) {}

  ngOnInit() {

    this.ponys = this.db.list('/ponys', {
      query: {
        limitToLast: 50
      }
    });

    //this.ponys.subscribe( item => console.log(item));


  }

  trackByFn(pony: Pony){
    return pony != null ? pony.id: null;
  }

  update(pony: Pony) {
    console.log(pony);
    pony.flipped = !pony.flipped;
    this.ponys.update(pony.$key, { flipped: pony.flipped });
  }

  reset() {
    this.ponys.remove();

    let ponys = [
      'Rainbow1.png',
      'Twilight1.png',
      'Tirek1.png'
    ].map((image, id) => {
      return {
        id,
        image,
        flipped: false
      };
    });

    ponys.forEach(pony => this.ponys.push(pony));
  }

}

class Pony {
  id: number;
  image: string;
  flipped: boolean;
  $key?: string;
}
