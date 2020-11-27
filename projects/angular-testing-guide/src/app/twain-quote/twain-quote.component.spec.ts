import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { TwainComponent } from './twain-quote.component';
import { TwainQuoteService } from './twain-quote.service';

describe('TwainQuoteComponent', () => {
  let component: TwainComponent;
  let fixture: ComponentFixture<TwainComponent>;
  let getQuoteSpy: jasmine.Spy;
  let testQuote: string;
  let quoteEl: HTMLElement;

  beforeEach(async(() => {
    testQuote = 'Test Quote';

    // Create a fake TwainService object with a `getQuote()` spy
    const twainService = jasmine.createSpyObj('TwainService', ['getQuote']);
    // Make the spy return a synchronous Observable with the test data
    getQuoteSpy = twainService.getQuote.and.returnValue(of(testQuote));
    TestBed.configureTestingModule({
      declarations: [TwainComponent],
      providers: [{ provide: TwainQuoteService, useValue: twainService }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    quoteEl = fixture.nativeElement.querySelector('.twain');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show quote after component initialized', () => {
    fixture.detectChanges(); // onInit()

    // sync spy result shows testQuote immediately after init
    expect(quoteEl.textContent).toBe(testQuote);
    expect(getQuoteSpy.calls.any()).toBe(true, 'getQuote called');
  });
});
