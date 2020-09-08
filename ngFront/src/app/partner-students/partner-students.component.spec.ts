import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerStudentsComponent } from './partner-students.component';

describe('PartnerStudentsComponent', () => {
  let component: PartnerStudentsComponent;
  let fixture: ComponentFixture<PartnerStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
