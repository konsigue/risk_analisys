import { TestBed, inject } from '@angular/core/testing';

import { DataRegisterService } from './data-register.service';

describe('DataRegisterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataRegisterService]
    });
  });

  it('should be created', inject([DataRegisterService], (service: DataRegisterService) => {
    expect(service).toBeTruthy();
  }));
});
