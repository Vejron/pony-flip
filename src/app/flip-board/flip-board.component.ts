import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { shuffle } from "lodash";

import 'rxjs/Rx';

@Component({
  selector: 'app-flip-board',
  templateUrl: './flip-board.component.html',
  styleUrls: ['./flip-board.component.scss']
})
export class FlipBoardComponent implements OnInit {

  //ponys: Pony[];
  ponys: FirebaseListObservable<Pony[]>;

  constructor(private db: AngularFireDatabase, private http: Http) { }

  ngOnInit() {

    this.ponys = this.db.list('/ponys', {
      query: {
        limitToLast: 50
      },
      //preserveSnapshot: true
    });

    //this.ponys.subscribe( item => console.log(item));
  }

  trackByFn(pony: Pony) {
    return pony != null ? pony.id : null;
  }

  clicked(pony: Pony) {
    // flip it
    this.ponys.update(pony.$key, { flipped: !pony.flipped });

    // is any other pony of that kind !flipped
    this.ponys.take(1).subscribe(ponys => {
      console.log(ponys);
      let pair = ponys.filter(element => pony.image === element.image);
      if (pair.every(element => !element.flipped)) {
        // mark these as done
        for (let card of pair) {
          this.ponys.update(card.$key, { done: true });
        }
      } else {
        let other = ponys.filter(element => !element.flipped && !element.done);
        if (other.length > 1) {
          // flip them over
          setTimeout(() => {
            for (let card of other) {
              this.ponys.update(card.$key, { flipped: true });
            }
          }, 1500);
        }

      }
    });
  }

  reset() {
    this.ponys.remove();

    this.http
      .get('assets/ponys.json')
      .map((res: Response) => res.json())
      .subscribe(ponys => {
        ponys = shuffle(ponys);
        ponys.forEach(pony => {
          pony.flipped = true;
          pony.done = false;
          this.ponys.push(pony)
        });
      });
  }

}

class Pony {
  id: number;
  image: string;
  flipped: boolean;
  done?: boolean;
  $key?: string;
}
