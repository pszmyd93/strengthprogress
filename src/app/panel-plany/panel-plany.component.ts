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
  

  constructor() { }

  ngOnInit() {
    
  }
  
}
