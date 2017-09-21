import { Component, OnInit } from '@angular/core';
import { SzablonCwiczenia } from '../szablon-cwiczenia';
import { kolory } from './kolory';


@Component({
  selector: 'app-plan-treningowy',
  templateUrl: './plan-treningowy.component.html',
  styleUrls: ['./plan-treningowy.component.css']
})
export class PlanTreningowyComponent implements OnInit {
  szablonyCwiczen: SzablonCwiczenia[] = [];
  domyslnaNazwaCwiczenia = "klata";
  dostepneKolory = kolory;

  constructor() { }

  ngOnInit() {
    this.szablonyCwiczen.push(new SzablonCwiczenia('klata'));
    this.szablonyCwiczen.push(new SzablonCwiczenia('podciąganie'));
  }
  onSubmit(formValues: SzablonCwiczenia){
    let c = new SzablonCwiczenia(formValues.nazwaCwiczenia);
    this.szablonyCwiczen.push(c);
  }
}
