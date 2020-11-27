import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwainQuoteComponent } from './twain-quote.component';

describe('TwainQuoteComponent', () => {
  let component: TwainQuoteComponent;
  let fixture: ComponentFixture<TwainQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwainQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwainQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
