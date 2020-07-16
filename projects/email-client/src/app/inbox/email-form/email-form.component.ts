import { Component, OnInit, Input } from '@angular/core';
import { Email } from '../email';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.scss'],
})
export class EmailFormComponent implements OnInit {
  emailForm: FormGroup;
  @Input() email: Email;
  constructor() {}

  ngOnInit(): void {
    const { to, subject, from, text } = this.email;
    this.emailForm = new FormGroup({
      to: new FormControl(to),
      from: new FormControl(from),
      subject: new FormControl(subject),
      text: new FormControl(text),
    });
  }
}
