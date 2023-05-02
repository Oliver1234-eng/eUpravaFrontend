import { TestBed } from '@angular/core/testing';

import { NepokretnostiService } from './nepokretnosti.service';

describe('NepokretnostiService', () => {
  let service: NepokretnostiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NepokretnostiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
