import { Component, OnInit, Input, Host } from '@angular/core';
import { PlanTreningowyValues } from '../plan-treningowy-values';


@Component({
  selector: 'app-miniatura',
  templateUrl: './miniatura.component.html',
  styleUrls: ['./miniatura.component.css']
})
export class MiniaturaComponent implements OnInit {
  @Input() planTreningowy: PlanTreningowyValues; //do pobierania nazwy z listy obiektow-planow
  @Input() nr: number;
  lista: PlanTreningowyValues[] = [];
  
  constructor() { }

  ngOnInit() {
    
  }
  usun(nazwa: string): void {
    //pobierz liste
    this.lista = JSON.parse(localStorage.getItem("listaPlanow"));
    //wyszukaj cel
    //remove cel
    let listaNowa = this.lista.filter(function(plan: PlanTreningowyValues) {
      return plan.nazwaPlanu !== nazwa;
  });
    //nadpisz liste
    localStorage.setItem("listaPlanow",JSON.stringify(listaNowa));
  }

}
