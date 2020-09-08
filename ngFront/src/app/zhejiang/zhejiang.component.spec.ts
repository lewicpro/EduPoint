import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhejiangComponent } from './zhejiang.component';

describe('ZhejiangComponent', () => {
  let component: ZhejiangComponent;
  let fixture: ComponentFixture<ZhejiangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZhejiangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZhejiangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
