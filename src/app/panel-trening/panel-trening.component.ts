import { Component, OnInit, Input } from '@angular/core';
import { Trening }  from '../treningi/trening';


@Component({
  selector: 'app-panel-trening',
  templateUrl: './panel-trening.component.html',
  styleUrls: ['./panel-trening.component.css']
})
export class PanelTreningComponent implements OnInit {
  treningi: Trening[] = JSON.parse(localStorage.getItem("listaTreningow"));
  id: number = 1;
  //@Input() nr: number;
  //@Input() trening: Trening;

  constructor() { }

  ngOnInit() {
  }

}
