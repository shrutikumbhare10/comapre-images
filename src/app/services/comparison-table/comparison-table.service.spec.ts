import { TestBed } from '@angular/core/testing';

import { ComparisonTableService } from './comparison-table.service';

describe('ComparisonTableService', () => {
  let service: ComparisonTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComparisonTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
