import { TestBed } from '@angular/core/testing';

import { TecnologiaService } from './habilidad.service';

describe('TecnologiaService', () => {
  let service: TecnologiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TecnologiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
