import { Component, OnInit } from '@angular/core';
import { SzablonCwiczenia } from '../szablon-cwiczenia';

@Component({
  selector: 'app-plan-treningowy',
  templateUrl: './plan-treningowy.component.html',
  styleUrls: ['./plan-treningowy.component.css']
})
export class PlanTreningowyComponent implements OnInit {
  szablonyCwiczen: SzablonCwiczenia[] = [];

  constructor() { }

  ngOnInit() {
    this.szablonyCwiczen.push(new SzablonCwiczenia('klata'));
    this.szablonyCwiczen.push(new SzablonCwiczenia('podciąganie'));
  }

}
