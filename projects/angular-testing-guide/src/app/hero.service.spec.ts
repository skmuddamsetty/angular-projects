import { HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Hero } from './hero';

import { HeroService } from './hero.service';
import { asyncData, asyncError } from './testing/async-observable-helpers';

/*
  The HeroService methods return Observables. You must subscribe to an observable to (a) cause it to execute and (b) assert that the method succeeds or fails.

  The subscribe() method takes a success (next) and fail (error) callback. Make sure you provide both callbacks so that you capture errors. Neglecting to do so produces an asynchronous uncaught observable error that the test runner will likely attribute to a completely different test.

  HttpClientTestingModule
  
  Extended interactions between a data service and the HttpClient can be complex and difficult to mock with spies.

  The HttpClientTestingModule can make these testing scenarios more manageable.

  While the code sample accompanying this guide demonstrates HttpClientTestingModule, this page defers to the Http guide, which covers testing with the HttpClientTestingModule in detail.
*/
describe('HeroService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let heroService: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    heroService = new HeroService(httpClientSpy as any);
  });

  it('should be created', () => {
    expect(heroService).toBeTruthy();
  });

  it('should return expected heroes (HttpClient called once)', () => {
    const expectedHeroes: Hero[] = [
      { id: 1, name: 'A' },
      { id: 2, name: 'B' },
    ];

    httpClientSpy.get.and.returnValue(asyncData(expectedHeroes));

    heroService
      .getHeroes()
      .subscribe(
        (heroes) => expect(heroes).toEqual(expectedHeroes, 'expected heroes'),
        fail
      );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return an error when the server returns a 404', () => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not Found',
    });

    httpClientSpy.get.and.returnValue(asyncError(errorResponse));

    heroService.getHeroes().subscribe(
      (heroes) => fail('expected an error, not heroes'),
      (error: any) => expect(error.message).toContain('test 404 error')
    );
  });
});
