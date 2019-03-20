import { TestBed, inject } from '@angular/core/testing';

import { SurveysService } from './surveys.service';

describe('SurveysService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SurveysService]
    });
  });

  it('should be created', inject([SurveysService], (service: SurveysService) => {
    expect(service).toBeTruthy();
  }));
});
