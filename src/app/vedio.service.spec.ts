import { TestBed, inject } from '@angular/core/testing';

import { VedioService } from './vedio.service';

describe('VedioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VedioService]
    });
  });

  it('should be created', inject([VedioService], (service: VedioService) => {
    expect(service).toBeTruthy();
  }));
});
