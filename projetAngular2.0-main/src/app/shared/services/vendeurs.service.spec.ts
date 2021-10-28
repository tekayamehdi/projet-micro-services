import { TestBed } from '@angular/core/testing';

import { VendeursService } from './vendeurs.service';

describe('VendeursService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VendeursService = TestBed.get(VendeursService);
    expect(service).toBeTruthy();
  });
});
