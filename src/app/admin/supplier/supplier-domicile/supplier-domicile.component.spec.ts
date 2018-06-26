import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierDomicileComponent } from './supplier-domicile.component';

describe('ProviderDomicileComponent', () => {
  let component: SupplierDomicileComponent;
  let fixture: ComponentFixture<SupplierDomicileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierDomicileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierDomicileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
