import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamepiontComponent } from './gamepiont.component';

describe('GamepiontComponent', () => {
  let component: GamepiontComponent;
  let fixture: ComponentFixture<GamepiontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamepiontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamepiontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
