import { TestBed } from '@angular/core/testing';

import { ShoppingCartHistoryService } from './shopping-cart-history.service';

describe('ShoppingCartHistoryService', () => {
  let service: ShoppingCartHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingCartHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
