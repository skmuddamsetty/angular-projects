import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  signedIn$: Observable<boolean>;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.signedIn$ = this.authService.signedIn$;
    this.authService.checkAuth().subscribe();
  }
}
