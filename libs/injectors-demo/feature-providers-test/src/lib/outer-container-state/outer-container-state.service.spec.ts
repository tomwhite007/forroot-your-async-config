import { TestBed } from '@angular/core/testing';

import { OuterContainerStateService } from './outer-container-state.service';

describe('OuterContainerStateService', () => {
  let service: OuterContainerStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OuterContainerStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
