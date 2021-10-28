import { TestBed } from '@angular/core/testing';

import { LunettesService } from './lunettes.service';

describe('LunettesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LunettesService = TestBed.get(LunettesService);
    expect(service).toBeTruthy();
  });
});
