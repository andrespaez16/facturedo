import { TestBed } from '@angular/core/testing';

import { AuxservicesService } from './auxservices.service';

describe('AuxservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuxservicesService = TestBed.get(AuxservicesService);
    expect(service).toBeTruthy();
  });
});
