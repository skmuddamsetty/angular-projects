import { TestBed } from '@angular/core/testing';
import { ValueService } from './value.service';

/*
  https://angular.io/guide/testing-services#angular-testbed
  
  The TestBed is the most important of the Angular testing utilities. The TestBed creates a dynamically-constructed Angular test module that emulates an Angular @NgModule.

  The TestBed.configureTestingModule() method takes a metadata object that can have most of the properties of an @NgModule.

  To test a service, you set the providers metadata property with an array of the services that you'll test or mock.

  Then inject it inside a test by calling TestBed.inject() with the service class as the argument.

  Or inside the beforeEach() if you prefer to inject the service as part of your setup.
*/
describe('ValueService', () => {
  let service: ValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ValueService] });
    service = TestBed.inject(ValueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getValue should return real value', () => {
    expect(service.getValue()).toBe('real value');
  });

  it('#getObservableValue should return value from observable', (done: DoneFn) => {
    service.getObservableValue().subscribe((value) => {
      expect(value).toBe('observable value');
      done();
    });
  });

  it('#getPromiseValue should return value from a promise', (done: DoneFn) => {
    service.getPromiseValue().then((value) => {
      expect(value).toBe('promise value');
      done();
    });
  });

  it('#getObservableDelayValue should return value from a observable after a delay', (done: DoneFn) => {
    service.getObservableDelayValue().subscribe((value) => {
      expect(value).toBe('observable delay value');
      done();
    });
  });
});
