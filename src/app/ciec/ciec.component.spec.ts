import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CIECComponent } from './ciec.component';

describe('CIECComponent', () => {
  let component: CIECComponent;
  let fixture: ComponentFixture<CIECComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CIECComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CIECComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
