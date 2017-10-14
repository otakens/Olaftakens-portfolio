import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeendeliveryComponent } from './keendelivery.component';

describe('KeendeliveryComponent', () => {
  let component: KeendeliveryComponent;
  let fixture: ComponentFixture<KeendeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeendeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeendeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
