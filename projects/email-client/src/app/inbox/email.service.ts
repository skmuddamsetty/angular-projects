import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface EmailSummary {
  subject: string;
  from: string;
  id: string;
}
@Injectable({
  providedIn: 'root',
})
export class EmailService {
  constructor(private http: HttpClient) {}
  rootUrl = 'https://api.angular-email.com';

  getEmails(): Observable<EmailSummary[]> {
    return this.http.get<EmailSummary[]>(`${this.rootUrl}/emails`);
  }
}
