import { Component, OnInit, Input } from '@angular/core';
import { SzablonCwiczenia } from '../szablon-cwiczenia';
import { SzablonCwiczeniaFormValues } from '../szablon-cwiczenia-form-values';

import { PlanTreningowyValues } from '../plan-treningowy-values';


@Component({
  selector: 'app-plan-treningowy',
  templateUrl: './plan-treningowy.component.html',
  styleUrls: ['./plan-treningowy.component.css']
})
export class PlanTreningowyComponent implements OnInit {
  planTreningowy: PlanTreningowyValues = new PlanTreningowyValues("nazwa");

  
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
