import { TestBed } from '@angular/core/testing';

import { IstorijePromenaService } from './istorije-promena.service';

describe('IstorijePromenaService', () => {
  let service: IstorijePromenaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IstorijePromenaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
