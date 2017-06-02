import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameDoneComponent } from './game-done.component';

describe('GameDoneComponent', () => {
  let component: GameDoneComponent;
  let fixture: ComponentFixture<GameDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
