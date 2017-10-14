import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinerslifeComponent } from './minerslife.component';

describe('MinerslifeComponent', () => {
  let component: MinerslifeComponent;
  let fixture: ComponentFixture<MinerslifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinerslifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinerslifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
