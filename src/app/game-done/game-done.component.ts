import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-done',
  templateUrl: './game-done.component.html',
  styleUrls: ['./game-done.component.scss']
})
export class GameDoneComponent implements OnInit {
  @Input() done;
  @Input() count;
  @Output() start = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
