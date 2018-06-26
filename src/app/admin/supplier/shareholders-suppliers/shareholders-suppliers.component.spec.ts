import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareholdersSuppliersComponent } from './shareholders-suppliers.component';

describe('ShareholdersSuppliersComponent', () => {
  let component: ShareholdersSuppliersComponent;
  let fixture: ComponentFixture<ShareholdersSuppliersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShareholdersSuppliersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareholdersSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
