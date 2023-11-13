import { TestBed } from '@angular/core/testing';

import { ProdcuctServiceService } from './prodcuct-service.service';

describe('ProdcuctServiceService', () => {
  let service: ProdcuctServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdcuctServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
