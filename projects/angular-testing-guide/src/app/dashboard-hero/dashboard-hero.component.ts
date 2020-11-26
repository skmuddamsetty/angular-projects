import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-dashboard-hero',
  templateUrl: './dashboard-hero.component.html',
  styleUrls: ['./dashboard-hero.component.scss'],
})
export class DashboardHeroComponent implements OnInit {
  @Input() hero: Hero;
  @Output() selected = new EventEmitter<Hero>();

  click() {
    this.selected.emit(this.hero);
  }

  constructor() {}

  ngOnInit(): void {}
}
