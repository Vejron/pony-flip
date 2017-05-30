import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flip-card',
  templateUrl: './flip-card.component.html',
  styleUrls: ['./flip-card.component.scss']
})
export class FlipCardComponent implements OnInit {

  @Input() width = '100px';
  @Input() height = '100px';
  @Input() flipped;
  @Input() done;

   _shake = '';
  //flipped = false;
  private _rotation = 0;

  constructor() { }

  ngOnInit() {
    //this.frontChallenge = this.challenge.equation;

  }

  ngOnChanges(changeRecord) {
    //console.log(changeRecord);
    //if(changeRecord.challenge) {
    //  this.flipp();
    //}
  }

  shake() {
    this._shake = 'shake';
    setTimeout(() => this._shake = '', 800);
  }

  flipp() {
    this.flipped = !this.flipped;
    this._rotation += 180;
  }

}
