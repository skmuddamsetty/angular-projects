import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  randomText = lorem.sentence();
  enteredText = '';
  onInput(val: string) {
    this.enteredText = val;
  }

  compare(char: string, enteredText: string) {
    if (!enteredText) {
      return 'pending';
    }
    return char === enteredText ? 'correct' : 'incorrect';
  }
}
