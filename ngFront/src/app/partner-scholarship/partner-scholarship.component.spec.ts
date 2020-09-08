import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerScholarshipComponent } from './partner-scholarship.component';

describe('PartnerScholarshipComponent', () => {
  let component: PartnerScholarshipComponent;
  let fixture: ComponentFixture<PartnerScholarshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerScholarshipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerScholarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
