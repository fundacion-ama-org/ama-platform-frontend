/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BrigadaService } from './services/brigada.service';

describe('Service: BrigadaServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BrigadaService]
    });
  });

  it('should ...', inject([BrigadaService], (service: BrigadaService) => {
    expect(service).toBeTruthy();
  }));
});
