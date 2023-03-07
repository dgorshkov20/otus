import { TestBed } from '@angular/core/testing';

import { GoService } from './go.service';

describe('GoService', () => {
  let service: GoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('checkWord should be true', () => {
    expect(service.checkWord('Привет', 'Привет')).toBeTrue()
  })

  it('checkWord should be false', () => {
    expect(service.checkWord('Привет', 'Пока')).toBeFalse()
  })
});
