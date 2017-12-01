import { Component, OnInit, Host } from '@angular/core';
import { PlanTreningowyValues } from '../plany/plan-treningowy-values';



@Component({
  selector: 'app-panel-plany',
  templateUrl: './panel-plany.component.html',
  styleUrls: ['./panel-plany.component.css']
})
export class PanelPlanyComponent implements OnInit {
  listaPlanow: PlanTreningowyValues[] = [];


  constructor() { }

  ngOnInit() {
    
    //dodawanie planów do listy z localstorage 

    //let str = localStorage.getItem("listaPlanow"); //albo listaPlanow = localstorage.getItem(listaPlanow);
    //this.listaPlanow = JSON.parse(str);  
    //cos zrobic zeby uzyskac liste nazw?
    this.listaPlanow.push(new PlanTreningowyValues("trening michała karmowskiego"));
    this.listaPlanow.push(new PlanTreningowyValues("drugi"));
    
    
  }

}
