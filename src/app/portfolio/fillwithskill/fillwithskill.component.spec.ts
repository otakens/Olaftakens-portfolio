import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillwithskillComponent } from './fillwithskill.component';

describe('FillwithskillComponent', () => {
  let component: FillwithskillComponent;
  let fixture: ComponentFixture<FillwithskillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillwithskillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillwithskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
