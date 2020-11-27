import { TestBed } from '@angular/core/testing';

import { TwainQuoteService } from './twain-quote.service';

describe('TwainQuoteService', () => {
  let service: TwainQuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwainQuoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
