import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderResumeComponent } from './provider-resume.component';

describe('ProviderResumeComponent', () => {
  let component: ProviderResumeComponent;
  let fixture: ComponentFixture<ProviderResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
