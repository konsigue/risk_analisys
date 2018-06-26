import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierGeneralInfoComponent } from './supplier-general-info.component';

describe('SupplierGeneralInfoComponent', () => {
  let component: SupplierGeneralInfoComponent;
  let fixture: ComponentFixture<SupplierGeneralInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierGeneralInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierGeneralInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
