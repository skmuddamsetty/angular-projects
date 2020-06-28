import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllCourses(): Observable<Product[]> {
    return this.http
      .get<Product[]>('/api/products')
      .pipe(map((res) => res['payload']));
  }
}
