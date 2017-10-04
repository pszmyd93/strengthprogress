import { Component, OnInit, Input } from '@angular/core';
import { SzablonCwiczenia } from '../szablon-cwiczenia';

import { PlanTreningowyValues } from '../plan-treningowy-values';


@Component({
  selector: 'app-plan-treningowy',
  templateUrl: './plan-treningowy.component.html',
  styleUrls: ['./plan-treningowy.component.css']
})
export class PlanTreningowyComponent implements OnInit {
  @Input() planTreningowy: PlanTreningowyValues;

  
  domyslnaNazwaCwiczenia = "klata";
  

  constructor() { }

  ngOnInit() {
    this.planTreningowy.szablonyCwiczen.push(new SzablonCwiczenia('klata'));
    this.planTreningowy.szablonyCwiczen.push(new SzablonCwiczenia('podciąganie'));
  }
  onSubmit(formValues: SzablonCwiczenia){
    let c = new SzablonCwiczenia(formValues.nazwaCwiczenia);
    this.planTreningowy.szablonyCwiczen.push(c);
  }
}
