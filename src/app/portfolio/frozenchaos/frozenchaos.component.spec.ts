import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrozenchaosComponent } from './frozenchaos.component';

describe('FrozenchaosComponent', () => {
  let component: FrozenchaosComponent;
  let fixture: ComponentFixture<FrozenchaosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrozenchaosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrozenchaosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
