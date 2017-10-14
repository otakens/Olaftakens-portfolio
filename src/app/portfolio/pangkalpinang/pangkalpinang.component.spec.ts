import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PangkalpinangComponent } from './pangkalpinang.component';

describe('PangkalpinangComponent', () => {
  let component: PangkalpinangComponent;
  let fixture: ComponentFixture<PangkalpinangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PangkalpinangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PangkalpinangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
