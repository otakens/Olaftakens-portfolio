import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcckyComponent } from './eccky.component';

describe('EcckyComponent', () => {
  let component: EcckyComponent;
  let fixture: ComponentFixture<EcckyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcckyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcckyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
