import { Component, OnInit, Input, Host } from '@angular/core';
//musi importować dane planu żeby pobierać nazwę
import { PlanTreningowyValues } from '../plan-treningowy-values';


@Component({
  selector: 'app-miniatura',
  templateUrl: './miniatura.component.html',
  styleUrls: ['./miniatura.component.css']
})
export class MiniaturaComponent implements OnInit {
  @Input() planTreningowy: PlanTreningowyValues; //do pobierania nazwy z listy obiektow-planow
  @Input() nr: number;

  constructor() { }

  ngOnInit() {

  }

}
