import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './reducers';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { stat } from 'fs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  loading = false;
  title = 'ecommerce app with NGRX';
  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.isLoggedIn$ = this.store.pipe(map((state) => !!state['auth'].user));
    this.isLoggedOut$ = this.store.pipe(map((state) => !state['auth'].user));
  }

  logout() {}
}
