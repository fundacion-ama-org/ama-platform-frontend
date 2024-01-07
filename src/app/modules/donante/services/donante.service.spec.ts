/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DonanteService } from './donante.service';

describe('Service: Donante', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DonanteService]
    });
  });

  it('should ...', inject([DonanteService], (service: DonanteService) => {
    expect(service).toBeTruthy();
  }));
});
