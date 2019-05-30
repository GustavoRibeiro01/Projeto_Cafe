import { TestBed } from '@angular/core/testing';

import { AutenticationServiceService } from './autentication-service.service';

describe('AutenticationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AutenticationServiceService = TestBed.get(AutenticationServiceService);
    expect(service).toBeTruthy();
  });
});
