import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VelocityballComponent } from './velocityball.component';

describe('VelocityballComponent', () => {
  let component: VelocityballComponent;
  let fixture: ComponentFixture<VelocityballComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VelocityballComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VelocityballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
