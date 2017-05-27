import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipBoardComponent } from './flip-board.component';

describe('FlipBoardComponent', () => {
  let component: FlipBoardComponent;
  let fixture: ComponentFixture<FlipBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlipBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlipBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
