import { TestBed } from '@angular/core/testing';

import { OmarserviceService } from './omarservice.service';

describe('OmarserviceService', () => {
  let service: OmarserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OmarserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
