import { Component, OnInit, Host } from '@angular/core';
import { PlanTreningowyValues } from '../plany/plan-treningowy-values';
import { PlanTreningowyService } from '../plany/plan-treningowy.service';



@Component({
  selector: 'app-panel-plany',
  templateUrl: './panel-plany.component.html',
  styleUrls: ['./panel-plany.component.css']
})
export class PanelPlanyComponent implements OnInit {
  listaPlanow: PlanTreningowyValues[] = [];
  listaPlanowStorage: PlanTreningowyValues[] = [];

  constructor(private PlanTreningowyService: PlanTreningowyService) { }

  ngOnInit() {
    
    //dodawanie planów do listy z localstorage 
    let pierwszy = new PlanTreningowyValues("pierwszy");
    let drugi = new PlanTreningowyValues("drugi");
    this.listaPlanowStorage.push(pierwszy);
    this.listaPlanowStorage.push(drugi);
    
    let list = JSON.stringify(this.listaPlanowStorage);
    localStorage.setItem("listaPlanow",list);
    this.listaPlanow = JSON.parse(localStorage.getItem("listaPlanow"));
    

    //let str = localStorage.getItem("listaPlanow"); //albo listaPlanow = localstorage.getItem(listaPlanow);
    //this.listaPlanow = JSON.parse(str);  
    //cos zrobic zeby uzyskac liste nazw?
    
    this.listaPlanow.push(new PlanTreningowyValues("drugi"));
    
    
  }

}
