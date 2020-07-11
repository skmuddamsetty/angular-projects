import { AsyncValidator, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({ providedIn: 'root' })
export class UniqueUsername implements AsyncValidator {
  constructor(private authService: AuthService) {}
  // this should be an arrow function so that we can access the instance variables using this keyword
  validate = (formControl: FormControl) => {
    const { value } = formControl;
    return this.authService.userNameAvailable(value).pipe(
      map((value) => {
        if (value.available) {
          return null;
        }
      }),
      catchError((err) => {
        if (err.error.username) {
          return of({ nonUniqueUsername: true });
        } else {
          return of({ noConnection: true });
        }
      })
    );
  };
}
