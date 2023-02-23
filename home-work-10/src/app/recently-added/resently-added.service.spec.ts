import { TestBed } from '@angular/core/testing';

import { ResentlyAddedService } from './resently-added.service';

describe('ResentlyAddedService', () => {
  let service: ResentlyAddedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResentlyAddedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
