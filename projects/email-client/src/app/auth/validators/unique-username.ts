import { AsyncValidator, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class UniqueUsername implements AsyncValidator {
  constructor(private http: HttpClient) {}
  // this should be an arrow function so that we can access the instance variables using this keyword
  validate = (formControl: FormControl) => {
    const { value } = formControl;
    return null;
  };
}
