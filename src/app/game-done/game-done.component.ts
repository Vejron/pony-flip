import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-game-done',
  templateUrl: './game-done.component.html',
  styleUrls: ['./game-done.component.scss']
})
export class GameDoneComponent implements OnInit {
  @Input() done;

  constructor() { }

  ngOnInit() {
  }

}
