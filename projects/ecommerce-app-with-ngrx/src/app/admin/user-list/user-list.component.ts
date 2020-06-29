import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../reducers';
import { selectAllUsers } from '../user/user.selectors';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users$: Observable<User[]>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.users$ = this.store.pipe(select(selectAllUsers));
  }
}
