import { Component, OnInit, Host } from '@angular/core';
import { PlanTreningowyValues } from '../plany/plan-treningowy-values';
import { PlanTreningowyService } from '../plany/plan-treningowy.service';



@Component({
  selector: 'app-panel-plany',
  templateUrl: './panel-plany.component.html',
  styleUrls: ['./panel-plany.component.css']
})
export class PanelPlanyComponent implements OnInit {
  listaPlanow: PlanTreningowyValues[] = JSON.parse(localStorage.getItem("listaPlanow"));
  listaPlanowStorage: PlanTreningowyValues[] = [];

  constructor() { }

  ngOnInit() {
    
    //dodawanie planów do listy z localstorage 
    let pierwszy = new PlanTreningowyValues("pierwszy");
    let drugi = new PlanTreningowyValues("drugi");
    //this.listaPlanowStorage.push(pierwszy);
    //this.listaPlanowStorage.push(drugi);
    
    //localStorage.setItem("listaPlanow",list);
    //let str = localStorage.getItem("listaPlanow"); //albo listaPlanow = localstorage.getItem(listaPlanow);
    //this.listaPlanow = JSON.parse(str);  
    //cos zrobic zeby uzyskac liste nazw?
    //this.listaPlanow = JSON.parse(localStorage.getItem("listaPlanow"));
    
  }
  
}
