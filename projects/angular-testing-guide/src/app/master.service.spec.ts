import { TestBed } from '@angular/core/testing';

import { MasterService } from './master.service';
import { ValueService } from './value.service';

/*
  https://angular.io/guide/testing-services#services-with-dependencies
  
  The first test creates a ValueService with new and passes it to the MasterService constructor.

  However, injecting the real service rarely works well as most dependent services are difficult to create and control.

  Instead you can mock the dependency, use a dummy value, or create a spy on the pertinent service method.

  Prefer spies as they are usually the easiest way to mock services.

  These standard testing techniques are great for unit testing services in isolation.

  However, you almost always inject services into application classes using Angular dependency injection and you should have tests that reflect that usage pattern. Angular testing utilities make it easy to investigate how injected services behave.
*/

describe('MasterService without Angular testing support', () => {
  let masterService: MasterService;

  it('#getValue should return real value from the real service', () => {
    masterService = new MasterService(new ValueService());
    expect(masterService.getValue()).toBe('real value');
  });

  // it('#getValue should return faked value from a fakeService', () => {
  //   masterService = new MasterService(new FakeValueService());
  //   expect(masterService.getValue()).toBe('faked service value');
  // });

  it('#getValue should return faked value from a fake object', () => {
    const fake = { getValue: () => 'fake value' };
    masterService = new MasterService(fake as ValueService);
    expect(masterService.getValue()).toBe('fake value');
  });

  it('#getValue should return stubbed value from a spy', () => {
    // create `getValue` spy on an object representing the ValueService
    const valueServiceSpy = jasmine.createSpyObj('ValueService', ['getValue']);

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
