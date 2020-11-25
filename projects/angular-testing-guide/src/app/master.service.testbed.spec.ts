import { TestBed } from '@angular/core/testing';

import { MasterService } from './master.service';
import { ValueService } from './value.service';

/*
  https://angular.io/guide/testing-services#angular-testbed

  When testing a service with a dependency, provide the mock in the providers array.

  In the following example, the mock is a spy object.
*/

describe('MasterService without Angular testing support', () => {
  let masterService: MasterService;
  let valueServiceSpy: jasmine.SpyObj<ValueService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ValueService', ['getValue']);

    TestBed.configureTestingModule({
      // Provide both the service-to-test and its (spy) dependency
      providers: [MasterService, { provide: ValueService, useValue: spy }],
    });
    // Inject both the service-to-test and its (spy) dependency
    masterService = TestBed.inject(MasterService);
    valueServiceSpy = TestBed.inject(
      ValueService
    ) as jasmine.SpyObj<ValueService>;
  });

  it('#getValue should return real value from the spy valueServiceSpy', () => {
    const stubValue = 'real value';
    // masterService = new MasterService(new ValueService());
    valueServiceSpy.getValue.and.returnValue(stubValue);
    expect(masterService.getValue()).toBe('real value');
  });

  it('#getValue should return stubbed value from a spy', () => {
    // set the value to return when the `getValue` spy is called.
    const stubValue = 'stub value';
    valueServiceSpy.getValue.and.returnValue(stubValue);

    masterService = new MasterService(valueServiceSpy);

    expect(masterService.getValue()).toBe(
      stubValue,
      'service returned stub value'
    );
    expect(valueServiceSpy.getValue.calls.count()).toBe(
      1,
      'spy method was called once'
    );
    expect(valueServiceSpy.getValue.calls.mostRecent().returnValue).toBe(
      stubValue
    );
  });
});
