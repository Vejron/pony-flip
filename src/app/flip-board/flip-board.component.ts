import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { shuffle } from "lodash";

import 'rxjs/Rx';

@Component({
  selector: 'app-flip-board',
  templateUrl: './flip-board.component.html',
  styleUrls: ['./flip-board.component.scss']
})
export class FlipBoardComponent implements OnInit {

  ponys$: FirebaseListObservable<Pony[]>;
  stats$: FirebaseObjectObservable<Stats>;

  ponys: Pony[];
  stats: Stats;

  constructor(private db: AngularFireDatabase, private http: Http) { }

  ngOnInit() {
    this.ponys$ = this.db.list('/ponys', {
      query: {
        limitToLast: 50
      }
    });
    this.ponys$.subscribe(ponys => {
      console.log('ponys refreched');
      this.ponys = ponys; // update ponys reactively
      if(this.isGameDone(this.ponys)) {
        this.stats$.update({done: true});
      }
    });

    this.stats$ = this.db.object('/stats');
    this.stats$.subscribe(status => {
      console.log('status refreched');
      this.stats = status; // update stats reactively
    });
  }

  isGameDone(ponys: Pony[]) {
    return ponys.every(pony => pony.done);
  }

  trackByFn(pony: Pony) {
    return pony != null ? pony.id : null;
  }

  clicked(pony: Pony) {
    // do nothing if its done
    if (pony.done) return;

    this.stats$.update({ count: this.stats.count + 1 });

    // flip it
    this.ponys$.update(pony.$key, { flipped: !pony.flipped });

    // is any other pony of that kind !flipped
    let pair = this.ponys.filter(element => pony.image === element.image);
    if (pair.every(element => !element.flipped)) {
      // mark these as done
      setTimeout(() => {
        for (let card of pair) {
          this.ponys$.update(card.$key, { done: true });
        }
      }, 500);
    } else {
      let other = this.ponys.filter(element => !element.flipped && !element.done);
      if (other.length > 1) {
        // flip them over if two or more uniqe ponys
        setTimeout(() => {
          for (let card of other) {
            this.ponys$.update(card.$key, { flipped: true });
          }
        }, 1500);
      }

    }
  }

  reset() {
    this.stats$.set({ done: false, count: 0 });
    this.ponys$.remove();
    this.http
      .get('assets/ponys.json')
      .map((res: Response) => res.json())
      .subscribe(ponys => {
        ponys = shuffle(ponys);
        ponys.forEach(pony => {
          pony.flipped = true;
          pony.done = false;
          this.ponys$.push(pony)
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

class Stats {
  done: boolean;
  count: number;
}
