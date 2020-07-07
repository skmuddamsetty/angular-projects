import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cards';
  posts = [
    {
      title: 'First Card',
      imageUrl: 'assets/tree.jpeg',
      username: '@firstUser',
      content: 'This is content of first post',
    },
    { title: 'Second Card' },
    { title: 'Third Card' },
  ];
}
