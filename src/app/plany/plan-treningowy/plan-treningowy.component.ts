import { Component, OnInit, Input, Host } from '@angular/core';
import { SzablonCwiczenia } from '../szablon-cwiczenia';
import { SzablonCwiczeniaFormValues } from '../szablon-cwiczenia-form-values';
import { PlanTreningowyValues } from '../plan-treningowy-values';
import { PlanTreningowyService } from '../plan-treningowy.service';
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-plan-treningowy',
  templateUrl: './plan-treningowy.component.html',
  styleUrls: ['./plan-treningowy.component.css']
})
export class PlanTreningowyComponent implements OnInit {
  //zrobic ifa plan z jsona albo plan nowy?

  planTreningowy: PlanTreningowyValues = new PlanTreningowyValues("nazwa");

  domyslnaNazwaCwiczenia = "klata";
  

  constructor(private activatedRoute: ActivatedRoute) {

  }
  private onParamsChanged(params) { 
    if(params.id) {
      this.planTreningowy.nazwaPlanu = params.id;
    }
  }

  

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(this.onParamsChanged.bind(this));

    this.planTreningowy.szablonyCwiczen.push(new SzablonCwiczenia('klata'));
    this.planTreningowy.szablonyCwiczen.push(new SzablonCwiczenia('podciąganie'));
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
