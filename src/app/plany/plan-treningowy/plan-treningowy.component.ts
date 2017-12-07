import { Component, OnInit, Input } from '@angular/core';
import { SzablonCwiczenia } from '../szablon-cwiczenia';
import { SzablonCwiczeniaFormValues } from '../szablon-cwiczenia-form-values';

import { PlanTreningowyValues } from '../plan-treningowy-values';

//import miniatury żeby móc dostać nazwę


@Component({
  selector: 'app-plan-treningowy',
  templateUrl: './plan-treningowy.component.html',
  styleUrls: ['./plan-treningowy.component.css']
})
export class PlanTreningowyComponent implements OnInit {
  //zrobic ifa plan z jsona albo plan nowy?
  miniaturaKliknieta: string;

  planTreningowy: PlanTreningowyValues = new PlanTreningowyValues("nazwa");

  domyslnaNazwaCwiczenia = "klata";
  

  constructor() { }
  

  ngOnInit() {
    this.planTreningowy.szablonyCwiczen.push(new SzablonCwiczenia('klata'));
    this.planTreningowy.szablonyCwiczen.push(new SzablonCwiczenia('podciąganie'));
    alert(this.miniaturaKliknieta);
  }
  onSubmit(formValues: SzablonCwiczenia){
    let c = new SzablonCwiczenia(formValues.nazwaCwiczenia);
    this.planTreningowy.szablonyCwiczen.push(c);
  }
  zapisz(): void {
    let obj = JSON.stringify(this.planTreningowy);//stringify values 
    localStorage.setItem("this.planTreningowy.nazwaPlanu",obj);
    alert(localStorage.getItem("this.planTreningowy.nazwaPlanu"));//wyświetlić 
     //dodać do listy
  }
}
