import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NusantaraComponent } from './nusantara.component';

describe('NusantaraComponent', () => {
  let component: NusantaraComponent;
  let fixture: ComponentFixture<NusantaraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NusantaraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NusantaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
