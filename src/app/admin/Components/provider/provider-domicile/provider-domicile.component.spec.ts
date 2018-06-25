import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderDomicileComponent } from './provider-domicile.component';

describe('ProviderDomicileComponent', () => {
  let component: ProviderDomicileComponent;
  let fixture: ComponentFixture<ProviderDomicileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderDomicileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderDomicileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
