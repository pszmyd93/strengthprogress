import { Component, OnInit, Input, Host } from '@angular/core';
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
 
  

  constructor() { }

  ngOnInit() {
    this.cwiczenie.serie.push(new Seria(10,100));
  }

  dodajSerie(): void
  {
    
    let s = new Seria(0,20);
    this.cwiczenie.serie.push(s);
  }

}
