import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuProvidersComponent } from './menu-providers.component';

describe('MenuProvidersComponent', () => {
  let component: MenuProvidersComponent;
  let fixture: ComponentFixture<MenuProvidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuProvidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
