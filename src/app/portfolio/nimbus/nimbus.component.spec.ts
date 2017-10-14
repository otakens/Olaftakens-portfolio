import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NimbusComponent } from './nimbus.component';

describe('NimbusComponent', () => {
  let component: NimbusComponent;
  let fixture: ComponentFixture<NimbusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NimbusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NimbusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
