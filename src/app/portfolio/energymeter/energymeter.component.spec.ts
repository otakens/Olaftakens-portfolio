import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergymeterComponent } from './energymeter.component';

describe('EnergymeterComponent', () => {
  let component: EnergymeterComponent;
  let fixture: ComponentFixture<EnergymeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnergymeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergymeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
