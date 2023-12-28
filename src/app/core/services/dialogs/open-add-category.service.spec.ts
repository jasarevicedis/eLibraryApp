import { TestBed } from '@angular/core/testing';

import { OpenAddCategoryService } from './open-add-category.service';

describe('OpenAddCategoryService', () => {
  let service: OpenAddCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenAddCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
