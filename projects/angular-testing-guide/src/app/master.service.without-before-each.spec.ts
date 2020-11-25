import { MasterService } from './master.service';

/*
  https://angular.io/guide/testing-services#testing-without-beforeeach

  Most test suites in this guide call beforeEach() to set the preconditions for each it() test and rely on the TestBed to create classes and inject services.

  There's another school of testing that never calls beforeEach() and prefers to create classes explicitly rather than use the TestBed.

  Here's how you might rewrite one of the MasterService tests in that style.

  Begin by putting re-usable, preparatory code in a setup function instead of beforeEach().

  The setup() function returns an object literal with the variables, such as masterService, that a test might reference. You don't define semi-global variables (e.g., let masterService: MasterService) in the body of the describe().

  Then each test invokes setup() in its first line, before continuing with steps that manipulate the test subject and assert expectations.

  Many developers feel this approach is cleaner and more explicit than the traditional beforeEach() style.

  Although this testing guide follows the traditional style and the default CLI schematics generate test files with beforeEach() and TestBed, feel free to adopt this alternative approach in your own projects.
*/

describe('MasterService without Angular testing support', () => {
  function setup() {
    const valueServiceSpy = jasmine.createSpyObj('ValueService', ['getValue']);
    const stubValue = 'stub value';
    const masterService = new MasterService(valueServiceSpy);

    valueServiceSpy.getValue.and.returnValue(stubValue);
    return { masterService, stubValue, valueServiceSpy };
  }

  it('#getValue should return stubbed value from a spy', () => {
    const { masterService, stubValue, valueServiceSpy } = setup();
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
