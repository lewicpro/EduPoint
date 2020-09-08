import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NottighamComponent } from './nottigham.component';

describe('NottighamComponent', () => {
  let component: NottighamComponent;
  let fixture: ComponentFixture<NottighamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NottighamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NottighamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
