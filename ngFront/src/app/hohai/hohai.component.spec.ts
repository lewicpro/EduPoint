import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HohaiComponent } from './hohai.component';

describe('HohaiComponent', () => {
  let component: HohaiComponent;
  let fixture: ComponentFixture<HohaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HohaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HohaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
