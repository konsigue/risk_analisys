import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSuppliersComponent } from './menu-suppliers.component';

describe('MenuSupplierComponent', () => {
  let component: MenuSuppliersComponent;
  let fixture: ComponentFixture<MenuSuppliersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuSuppliersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
