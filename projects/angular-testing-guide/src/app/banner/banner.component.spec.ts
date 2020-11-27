import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';

import { BannerComponent } from './banner.component';

describe('BannerComponent (minimal)', () => {
  it('should create', () => {
    /* In this example, the metadata object passed to TestBed.configureTestingModule simply declares BannerComponent, the component to test.
    
    There's no need to declare or import anything else. The default test module is pre-configured with something like the BrowserModule from @angular/platform-browser.

  Later you'll call TestBed.configureTestingModule() with imports, providers, and more declarations to suit your testing needs. Optional override methods can further fine-tune aspects of the configuration.
    */
    TestBed.configureTestingModule({ declarations: [BannerComponent] });
    /* TestBed.createComponent() creates an instance of the BannerComponent, adds a corresponding element to the test-runner DOM, and returns a ComponentFixture. */
    const fixture = TestBed.createComponent(BannerComponent);
    /*  The ComponentFixture is a test harness for interacting with the created component and its corresponding element. */
    const component = fixture.componentInstance;
    /* Access the component instance through the fixture and confirm it exists with a Jasmine expectation: */
    expect(component).toBeDefined();
  });
});

/*
  https://angular.io/guide/testing-components-basics#beforeeach
  beforeEach()
  You will add more tests as this component evolves. Rather than duplicate the TestBed configuration for each test, you refactor to pull the setup into a Jasmine beforeEach() and some supporting variables:
*/
describe('BannerComponent (with beforeEach)', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  let h1: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [BannerComponent] });
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    h1 = fixture.nativeElement.querySelector('h1');
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  /*
    Now add a test that gets the component's element from fixture.nativeElement and looks for the expected text.
  */
  it('should contain "banner works!"', () => {
    /* https://angular.io/guide/testing-components-basics#nativeelement */
    const bannerElement: HTMLElement = fixture.nativeElement;
    expect(bannerElement.textContent).toContain('banner works!');
  });

  it('should have <p> with "banner works!"', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const p = bannerElement.querySelector('p');
    expect(p.textContent).toEqual('banner works!');
  });

  it('should find the <p> with fixture.debugElement.nativeElement)', () => {
    const bannerDe: DebugElement = fixture.debugElement;
    const bannerEl: HTMLElement = bannerDe.nativeElement;
    const p = bannerEl.querySelector('p');
    expect(p.textContent).toEqual('banner works!');
  });

  /**
   * https://angular.io/guide/testing-components-basics#bycss
   */
  it('should find the <p> with fixture.debugElement.query(By.css)', () => {
    const bannerDe: DebugElement = fixture.debugElement;
    const paragraphDe = bannerDe.query(By.css('p'));
    const p: HTMLElement = paragraphDe.nativeElement;
    expect(p.textContent).toEqual('banner works!');
  });

  it('no title in the DOM after createComponent()', () => {
    expect(h1.textContent).toEqual('');
  });

  it('should not display original title because change detection did not happen', () => {
    expect(h1.textContent).toEqual('');
  });

  it('should display original title after detectChanges()', () => {
    fixture.detectChanges();
    expect(h1.textContent).toContain(component.title);
  });

  it('should display a different test title', () => {
    component.title = 'Test Title';
    fixture.detectChanges();
    expect(h1.textContent).toContain('Test Title');
  });
});

describe('BannerComponent (AutoDetect)', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  let h1: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerComponent],
      providers: [{ provide: ComponentFixtureAutoDetect, useValue: true }],
    });
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    h1 = fixture.nativeElement.querySelector('h1');
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should display original title', () => {
    // Hooray! No `fixture.detectChanges()` needed
    expect(h1.textContent).toContain(component.title);
  });

  it('should still see original title after component.title change', () => {
    const oldTitle = component.title;
    component.title = 'Test Title';
    // Displayed title is old because Angular didn't hear the change :(
    expect(h1.textContent).toContain(oldTitle);
  });

  it('should display updated title after detectChanges', () => {
    component.title = 'Test Title';
    fixture.detectChanges(); // detect changes explicitly
    expect(h1.textContent).toContain(component.title);
  });
});

describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  /**
   * 
   * Because compileComponents is asynchronous, it uses the waitForAsync utility function imported from @angular/core/testing.

    Please refer to the waitForAsync section for more details.
   */
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BannerComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
