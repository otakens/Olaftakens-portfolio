import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegionsofshadowComponent } from './legionsofshadow.component';

describe('LegionsofshadowComponent', () => {
  let component: LegionsofshadowComponent;
  let fixture: ComponentFixture<LegionsofshadowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegionsofshadowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegionsofshadowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
