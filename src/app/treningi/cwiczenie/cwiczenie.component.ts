import { Component, OnInit, Input, Host, Output, EventEmitter } from '@angular/core';
import { Cwiczenie } from '../cwiczenie';
import { Seria } from '../seria';

@Component({
  selector: 'app-cwiczenie',
  templateUrl: './cwiczenie.component.html',
  styleUrls: ['./cwiczenie.component.css']
})
export class CwiczenieComponent implements OnInit {
  @Input() cwiczenie: Cwiczenie;
  @Input() nr: number;
  @Output() onUsunCwiczenie = new EventEmitter();
 
  

  constructor() { }

  ngOnInit() {
    this.cwiczenie.serie.push(new Seria(10,100));
  }

  dodajSerie(): void
  {
    let s = new Seria(0,20);
    this.cwiczenie.serie.push(s);
  }
  usunSerie(nr: number){
    alert(nr);
    this.cwiczenie.serie.splice(nr-1,1);
  }

  usunCwiczenie(){
    this.onUsunCwiczenie.emit(this.nr);
  }
}
