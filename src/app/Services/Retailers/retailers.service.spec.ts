import { TestBed } from '@angular/core/testing';

import { RetailersService } from './retailers.service';

describe('RetailersService', () => {
  let service: RetailersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetailersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
