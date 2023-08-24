import { TestBed } from '@angular/core/testing';

import { MaticarService } from './maticar.service';

describe('MaticarService', () => {
  let service: MaticarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaticarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
