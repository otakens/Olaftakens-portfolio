import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerflectieComponent } from './perflectie.component';

describe('PerflectieComponent', () => {
  let component: PerflectieComponent;
  let fixture: ComponentFixture<PerflectieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerflectieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerflectieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
