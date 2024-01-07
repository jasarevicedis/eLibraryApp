import { TestBed } from '@angular/core/testing';

import { OpenDeleteCategoryService } from './open-delete-category.service';

describe('OpenDeleteCategoryService', () => {
  let service: OpenDeleteCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenDeleteCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
