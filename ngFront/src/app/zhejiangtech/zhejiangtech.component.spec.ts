import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhejiangtechComponent } from './zhejiangtech.component';

describe('ZhejiangtechComponent', () => {
  let component: ZhejiangtechComponent;
  let fixture: ComponentFixture<ZhejiangtechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZhejiangtechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhejiangtechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
