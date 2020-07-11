import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface UsernameAvailableResponse {
  available: boolean;
}

interface SignupCredentials {
  username: string;
  password: string;
  passwordConfirmation: string;
}

interface SignupResponse {
  username: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  rootUrl = 'https://api.angular-email.com';

  constructor(private http: HttpClient) {}

  userNameAvailable(username: string): Observable<UsernameAvailableResponse> {
    return this.http.post<UsernameAvailableResponse>(
      `${this.rootUrl}/auth/username`,
      {
        username,
      }
    );
  }

  signup(credentials: SignupCredentials): Observable<SignupResponse> {
    return this.http.post<SignupResponse>(
      `${this.rootUrl}/auth/signup`,
      credentials
    );
  }
}
