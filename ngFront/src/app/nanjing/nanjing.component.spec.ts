import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NanjingComponent } from './nanjing.component';

describe('NanjingComponent', () => {
  let component: NanjingComponent;
  let fixture: ComponentFixture<NanjingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NanjingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NanjingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
