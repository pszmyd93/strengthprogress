import { Component, OnInit ,Host, Input} from '@angular/core';
import { Cwiczenie } from '../cwiczenie';
import { Trening } from '../trening';
import { PlanTreningowyValues } from '../../plany/plan-treningowy-values';
import { ActivatedRoute } from '@angular/router';
import { Seria } from '../seria';

@Component({
  selector: 'app-trening',
  templateUrl: './trening.component.html',
  styleUrls: ['./trening.component.css']
})
export class TreningComponent implements OnInit {
  @Input() nazwa = "plan";
  trening: Trening = new Trening(this.nazwa);
  plan: PlanTreningowyValues = new PlanTreningowyValues("plan111");

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe(this.onParamsChanged.bind(this));
  }

  private onParamsChanged(params) { //otrzymywanie planu
    if(params.nazwa) {
      this.nazwa = params.nazwa;
      let plany = JSON.parse(localStorage.getItem("listaPlanow"));
      for(let i = 0; i < plany.length; i++) {
        let plan = plany[i]
        if(plan.nazwaPlanu == params.nazwa) {
          this.plan = plan;
          alert(JSON.stringify(this.plan));
        }
      }
    }
    this.pobierzDane(this.plan);
  }

  pobierzDane(plan: PlanTreningowyValues): void {
    plan = this.plan;
    for(let i = 0; i < plan.szablonyCwiczen.length; i++){
      this.trening.cwiczenia.push(new Cwiczenie(plan.szablonyCwiczen[i].nazwaCwiczenia));
      //if
      if(plan.szablonyCwiczen[i].liczbaSerii) {
        for(let j = 0; j < plan.szablonyCwiczen[i].liczbaSerii; j++){
          this.trening.cwiczenia[i].serie.push(new Seria(plan.szablonyCwiczen[i].liczbaPowtorzen,0));
        }
      }
    }
  }

  zapiszTrening():void
  {
    alert(JSON.stringify(this.trening.cwiczenia));
  }
  usunCwiczenie(nr: number) {
    this.trening.cwiczenia.splice(nr, 1);
  }
} 
