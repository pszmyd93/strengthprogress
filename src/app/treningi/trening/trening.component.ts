import { Component, OnInit ,Host, Input} from '@angular/core';
import { Cwiczenie } from '../cwiczenie';
import { Trening } from '../trening';
import { PlanTreningowyValues } from '../../plany/plan-treningowy-values';

@Component({
  selector: 'app-trening',
  templateUrl: './trening.component.html',
  styleUrls: ['./trening.component.css']
})
export class TreningComponent implements OnInit {
  @Input() nazwa = "plan";
  trening: Trening = new Trening(this.nazwa);
  plan: PlanTreningowyValues = new PlanTreningowyValues("plan");

  constructor() { }

  ngOnInit() {
    this.trening.cwiczenia.push(new Cwiczenie('klata'));
    this.trening.cwiczenia.push(new Cwiczenie('biceps'));
  }
  zapiszTrening():void
  {
    alert(JSON.stringify(this.trening.cwiczenia));
  }
  usunCwiczenie(nr: number) {
    this.trening.cwiczenia.splice(nr, 1);
  }
} 
