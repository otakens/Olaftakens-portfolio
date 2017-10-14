import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpressiveinteractiveComponent } from './impressiveinteractive.component';

describe('ImpressiveinteractiveComponent', () => {
  let component: ImpressiveinteractiveComponent;
  let fixture: ComponentFixture<ImpressiveinteractiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpressiveinteractiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpressiveinteractiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
