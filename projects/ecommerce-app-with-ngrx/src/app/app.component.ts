import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from './reducers';
import { Observable } from 'rxjs';
import { isLoggedIn, isLoggedOut } from './auth/auth.selectors';
import { logout } from './auth/auth.actions';

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
    // map can be used along with distinctUntilChanged operator to eliminate duplicates
    // this.isLoggedIn$ = this.store.pipe(map((state) => !!state['auth'].user));
    // this.isLoggedOut$ = this.store.pipe(map((state) => !state['auth'].user));
    // select eliminates the issue of duplicate values and reaching out to the view each time something changes in the store
    // this.isLoggedIn$ = this.store.pipe(select((state) => !!state['auth'].user));
    // this.isLoggedOut$ = this.store.pipe(select((state) => !state['auth'].user));
    // using selectors i.e memoized functions
    this.isLoggedIn$ = this.store.pipe(select(isLoggedIn));
    this.isLoggedOut$ = this.store.pipe(select(isLoggedOut));
  }

  logout() {
    this.store.dispatch(logout());
  }
}
